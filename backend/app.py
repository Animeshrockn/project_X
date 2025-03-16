

import datetime
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
reservations_collection = db["animesh_reservations"]

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

    menuItems = [{
        "itemId": 0,
        "available": True,
        "itemName": "Daal Makhni",
        "itemDescription": "A Tasty blend of black lentils and Butter, A must have for family meals",
        "cost": 19
    },
    {
        "itemId": 1,
        "available": True,
        "itemName": "Chicken Vindaloo",
        "itemDescription": "Known for its spicy and tangy flavor combination",
        "cost": 20
    },
    {
        "itemId": 2,
        "available": True,
        "itemName": "BURRATA",
        "itemDescription": "roasted beets, shiso olive pesto, toasted hazelnut, pickled beets, sweet beet powder, basil oil, crispy roots, chinese donut",
        "cost": 29
    },
    {
        "itemId": 3,
        "available": True,
        "itemName": "Lachcha Paratha",
        "itemDescription": "This legacy naan recipe from India whih is crunchy and soft at the same time",
        "cost": 4
    }
    ]
    data = list(menu_items_collection.find())
    menu_items = json.dumps(data, default=json_util.default)
    return menu_items

@app.route('/api/reservation', methods=['POST'])
def create_reservation():
    reservation_data = request.get_json()
    reservation_data['created_at'] = datetime.datetime.now()
    # Process the data (you can save it to the DB here)
    try:
        # Insert the reservation into the MongoDB collection
        # print("reservertion data :", reservation_data)
        reservations_collection.insert_one(reservation_data)
        
        return jsonify({
            "message": "Reservation successfully saved!"
        }), 201
    except Exception as e:
        return jsonify({
            "message": "Error saving reservation.",
            "error": str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True)
