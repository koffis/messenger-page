from flask import Flask, request
import json
from flask_cors import CORS

app = Flask(__name__)
my_cor = CORS(app, resources={r"/*": {"origins": "*"}})


@app.route("/<int:id>", methods=['GET'])
def get_dialogs(id:int):
    with open('dialogs.json') as file:
        dialogs_id = json.load(file)
    for dialog in dialogs_id['dialogs']:
        if dialog['dialog']['id'] == id:
            return dialog


@app.route("/send", methods=['POST'])
def send_message():
    message_json = request.get_json()
    sender_id = message_json["id"]
    message = message_json["message"]
    print(message)
    with open("dialogs.json") as file:
        dialogs_id = json.load(file)
    for dialog in dialogs_id["dialogs"]:
        if dialog["dialog"]["id"] == sender_id:
            dialog["dialog"]["messages"].append(message)
            with open("dialogs.json", "w") as file:
                file.write(json.dumps(dialogs_id))
            return {
                "message": "Message was added successful"
            }, 200


if __name__ == '__main__':
    app.run(debug=True)
