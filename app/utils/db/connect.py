from pymongo import MongoClient
from pymongo.errors import ServerSelectionTimeoutError
from starlette.background import BackgroundTasks

from config import DB_URI,DB_NAME

mongo_client = MongoClient(DB_URI)
print("DB_URI")
print(mongo_client)
# db = mongo_client[DB_NAME]
mongo_client = MongoClient('mongodb://fluentai:12345678@172.31.15.79:27017/fluentai')
db = mongo_client['fluentai']

