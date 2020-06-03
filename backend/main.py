from flask import Flask, request
import json
from flask_cors import CORS
from flask_bcrypt import Bcrypt

app = Flask(__name__)
my_cor = CORS(app, resources={r"/*": {"origins": "*"}})
bcrypt = Bcrypt(app)


@app.route("/<int:id>", methods=['GET'])
def get_dialogs(id:int):
    with open('dialogs.json') as file:
        dialogs_id = json.load(file)
    for dialog in dialogs_id['dialogs']:
        if dialog['dialog']['id'] == id:
            return dialog


@app.route("/users", methods=['GET'])
def get_users():
    with open('users.json') as file:
        users = json.load(file)
        return users


@app.route("/last", methods=['POST'])
def get_last():
    new_message = request.get_json()
    sender_id = new_message["id"]
    message = new_message["message"]
    date = new_message["date"]
    time = new_message["time"]
    with open("users.json") as file:
        users_id = json.load(file)
    for user in users_id["users"]:
        if user["userId"] == sender_id:
            user["message"] = message
            user["date"] = date
            user["time"] = time
            with open("users.json", "w") as file:
                file.write(json.dumps(users_id))
            return {
                "message": "Last message was changed successful"
            }, 200


@app.route("/send", methods=['POST'])
def send_message():
    message_json = request.get_json()
    sender_id = message_json["id"]
    message = message_json["message"]
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
