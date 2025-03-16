

from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
import json
from bson import json_util

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient("mongodb+srv://Cluster16349:a1l0RVViYVNu@cluster16349.0gftb.mongodb.net/")
db = client['nikita']
collection = db['nikita_test']

@app.route('/api/data', methods=['GET'])
def get_data():
    print("Hello")
    data = list(collection.find())  # Exclude MongoDB _id
    document_json = json.dumps(data, default=json_util.default)
    print(data)
    return document_json

@app.route('/api/data', methods=['POST'])
def add_data():
    data = request.json
    collection.insert_one(data)
    return jsonify({"message": "Data added successfully!"}), 201

if __name__ == '__main__':
    app.run(debug=True)
