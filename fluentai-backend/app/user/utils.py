import config
from app.utils.db.connect import db
import bcrypt
import jwt
import datetime
import uuid



def check_email_exist(email):
    try:
        data = db['users'].find_one({"email": email})
        status = False
        if data:
            status = True
        return status
    except Exception as e:
        print("error", e)
        return False

def get_user_details(email):
    try:
        data = db['users'].find_one({"email": email})
        return data
    except Exception as e:
        print("error", e)
        return False

def update_image(email,image):
    try:
        db['users'].update_one({"email":email},{"$set":{"image":image}})
        return True
    except Exception as e:
        print(e)
        return False

def add_user(user):
    try:
        db['users'].insert_one(user)
        return True
    except Exception as e:
        print(e)
        return False


def get_unique_id():
    try:
        return uuid.uuid4()
    except Exception as e:
        print(e)
        return False
def gen_hash(password):
    try:
        print(password)
        password = password.encode('utf-8')  # Convert password to bytes
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(password, salt)
        return hashed_password
    except Exception as e:
        print("error", e)
        return False


def compare_hash(hashed_password, password):
    try:
        entered_password = password.encode('utf-8')  # Convert entered password to bytes

        # Compare the entered password with the hashed password
        if bcrypt.checkpw(entered_password, hashed_password):
            return True
        else:
            return False
    except Exception as e:
        print(e)
        return False


def get_token(payload, expiry=None):
    try:
        secret_key = config.JWT_SECRET
        if expiry:
            payload['exp'] = datetime.datetime.utcnow() + datetime.timedelta(minutes=expiry)  # minutes
        jwt_token = jwt.encode(payload, secret_key, algorithm='HS256')
        return jwt_token
    except Exception as e:
        print(e)
        return False


def verify_token(jwt_token):
    try:
        decoded_token = jwt.decode(jwt_token, config.JWT_SECRET, algorithms=['HS256'])
        return decoded_token

    except jwt.InvalidTokenError:
        print('Invalid token')
        return False

    except Exception as e:
        print(e)
        return False


