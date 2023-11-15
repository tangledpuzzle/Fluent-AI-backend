import redis
from config import REDIS_HOST,REDIS_PORT

r = redis.Redis(host=REDIS_HOST, port=REDIS_PORT, db=0)


def set_data(key, value, expiry):
    r.set(key, value, ex=expiry)
    return True


def update_expiry(key, expiry):
    r.expire(key, expiry)
    return True


def get_data(key):
    data = r.get(key)
    return data

def remove_data(key):
    r.delete(key)
    return True
