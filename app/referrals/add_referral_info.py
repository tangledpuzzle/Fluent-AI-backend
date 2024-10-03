from app.utils.db.connect import db
from datetime import datetime

def add_referral_info(referral_id, user_id):
    try:
        data = db["users"].find_one({"referral_id": referral_id})
        if not data:
            return False
        referred_by = data['id']
        db['user_referrals'].update_one({
            "referral_id": referral_id,
            "referred_by": referred_by,
            "user_id": user_id
        },
            {
                "$set": {
                    "referral_id": referral_id,
                    "referred_by": referred_by,
                    "user_id": user_id,
                    "created_date": datetime.utcnow(),
                    "updated_date": datetime.utcnow()
                }
            },
            upsert=True
        )
    except Exception as e:
        print(e)
        return True
