from app.utils.db.connect import db

def get_user_referral_id(id):
    try:
        user = db['users'].find_one({"id":id})
        if not (user or user['referral_id']):
            return False
        return user["referral_id"]
    except Exception as e:
        print(e)
        return False