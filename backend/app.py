

from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
import json
from bson import json_util

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient("mongodb+srv://Cluster16349:a1l0RVViYVNu@cluster16349.0gftb.mongodb.net/")
db = client['project_x']
menu_items_collection = db['menu_items']


@app.route('/api/data', methods=['GET'])
def get_data():
    print("Hello")
    data = list(menu_items_collection.find())  # Exclude MongoDB _id
    document_json = json.dumps(data, default=json_util.default)
    print(data)
    return document_json

@app.route('/api/data', methods=['POST'])
def add_data():
    data = request.json
    menu_items_collection.insert_one(data)
    return jsonify({"message": "Data added successfully!"}), 201

@app.route('/api/menu_items', methods=['GET'])
def get_menu_items():
    # This data will go into the database
    data = list(menu_items_collection.find())
    menu_items = json.dumps(data, default=json_util.default)
    return menu_items

if __name__ == '__main__':
    app.run(debug=True)
