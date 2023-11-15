import json

from app.utils.chat_completions import get_response
from app.utils.db.connect import db
from datetime import datetime
from config import MESSAGE_TYPES
from app.utils.string_utils import get_unique_id


def chat(user_id, message, fluency, is_reset, language,language_name, audio_url="", audio_meta={}):
    try:

        payload = [{"role": "user", "content": message + ' , user fluency is ' + fluency + ' respond in ' + language_name +  ' language ' + ' max response size should be with in 20-30 words'}]
        previous_chats = []
        msg = {
            "user_id": user_id,
            "message": message,
            "type": MESSAGE_TYPES["user"],
            "payload": payload[0],
            "created_date": str(datetime.utcnow()),
            "is_processed": True,
            "is_assessmented": 0
        }

        if audio_url:
            msg["audio_url"] = audio_meta["path"]
            del audio_meta["text"]
            del audio_meta["path"]
            msg["audio_meta"] = audio_meta

        if is_reset:
            message_id = get_unique_id()
            msg["context_id"] = message_id
        else:
            msg_data = db["chats"].find_one({"user_id": user_id}, sort=[("created_date", -1)])
            if not msg_data or not ("context_id" in msg_data):
                message_id = get_unique_id()
                msg["context_id"] = message_id
                if not msg_data:
                    msg_data = {}
                msg_data["context_id"] = message_id
            else:
                message_id = msg_data["context_id"]

            previous_chats = db["chats"].aggregate([

                {
                    "$match": {
                        "user_id": user_id,
                        "context_id": message_id,
                        "is_processed": True
                    }

                },
                {
                    "$sort": {"created_date": 1}

                },

                {
                    "$project": {

                        "payload": 1,
                        "_id": 0
                    }
                },

                {"$limit": 5},

                {"$replaceRoot": {"newRoot": "$payload"}},

            ])
            previous_chats = list(previous_chats)
            # payload = previous_chats + payload

        print("paylond len", len(payload))
        print("payloaddd", payload)
        chat_response = get_response(previous_chats, payload[0])
        if not chat_response["success"]:
            msg["is_processed"] = False
            return chat_response
        db["chats"].insert_one(msg)
        print(chat_response["data"]["content"])
        if chat_response and chat_response["data"]["content"]:
            db["chats"].insert_one({
                "user_id": user_id,
                "message": chat_response["data"]["content"],
                "type": MESSAGE_TYPES["bot"],
                "language": language,
                "payload": chat_response["data"],
                "context_id": message_id,
                "created_date": str(datetime.utcnow()),
                "is_processed": True
            })

        return chat_response

    except Exception as e:
        print("error", e)
        return False
