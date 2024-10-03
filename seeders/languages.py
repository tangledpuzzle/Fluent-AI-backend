from pymongo import MongoClient
import sys
import os

current_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.dirname(current_dir)
sys.path.append(root_dir)


from config import DB_URI, DB_NAME

datas = [
    {
        "id": 1,
        "name": "Mandarin",
        "active": True
    },
    {
        "id": 2,
        "name": "Spanish",
        "active": True
    }
]


def seed_languages():
    try:
        mongo_client = MongoClient(DB_URI)
        db = mongo_client[DB_NAME]
        db["languages"].insert_many(datas)
        print(" languages finished ")
    except Exception as e:
        print(e)


if __name__ == "__main__":
    seed_languages()
