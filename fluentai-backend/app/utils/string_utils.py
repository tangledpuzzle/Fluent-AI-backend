import shortuuid
import uuid

def getShortUUID():
    short_id = shortuuid.uuid()
    return short_id


def get_unique_id():
    try:
        return str(uuid.uuid4())
    except Exception as e:
        print(e)
        return False