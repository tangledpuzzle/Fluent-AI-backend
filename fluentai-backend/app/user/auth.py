from fastapi import HTTPException, Depends, Request
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from app.utils.redis import get_data, update_expiry
from config import AUTH_TOKEN_EXPIRY_TIME

from fastapi import status

from .utils import verify_token

security = HTTPBearer()


class CustomHTTPException(HTTPException):
    def __init__(self, status_code: int, detail: dict):
        super().__init__(status_code=status_code, detail=detail)


async def validate_token(request: Request, credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    token_check = get_data(token)
    if not token_check:
        raise CustomHTTPException(status_code=401, detail={"success": False, "error": "UnAuthorized"})
    token_data = verify_token(token)
    request.state.user = token_data
    # print("token", token)
    if not token_data:
        print("here")
        raise CustomHTTPException(status_code=401, detail={"success": False, "error": "UnAuthorized"})

    update_expiry(token, AUTH_TOKEN_EXPIRY_TIME)
    return True
