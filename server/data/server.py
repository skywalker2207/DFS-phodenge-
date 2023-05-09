# make a flask server api to run kg.py and return the result
# run this file to start the server

from flask import Flask, request, jsonify
from flask_cors import CORS
from kg import KG
import json
import os
from dotenv import load_dotenv
from pymongo import MongoClient



load_dotenv()
 
database_url = os.getenv('MONGO_URL')
print(database_url)

app = Flask(__name__)
CORS(app)

@app.route('/apiPost', methods=['POST'])
def apiPost():
    # data = request.get_json()
    KG()
    return "Added to DB", 200

@app.route('/apiGet', methods=['GET'])


def apiGet():
    client = MongoClient(database_url)
    db = client["test"]
    collection = db["kg"]
    # find the latest entry in the database
    data = collection.find_one(sort=[("_id", -1)])
    # convert the base64 string to json
    data = json.dumps(data, default=str)
    return data, 200

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)