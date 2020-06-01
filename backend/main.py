from flask import Flask
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


if __name__ == '__main__':
    app.run(debug=True)
