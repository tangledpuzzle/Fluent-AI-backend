import time
from typing import Optional
import uvicorn
from fastapi import FastAPI, Body, Request, Depends
from fastapi.responses import JSONResponse
from app.routes import router as api_router
from config import DEBUG
from fastapi.exceptions import RequestValidationError
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from app.user.auth import validate_token, CustomHTTPException

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.exception_handler(CustomHTTPException)
async def custom_exception_handler(request, exc: CustomHTTPException):
    return JSONResponse(status_code=exc.status_code, content=exc.detail)


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    class CustomErrorResponse(BaseModel):
        success: bool = False
        error: str
        code: int
        error_description: Optional[list]

    errors = exc.errors()
    error_messages = []
    for error in errors:
        print("error",error)
        if len(error["loc"])>1:
            field = error["loc"][1]
        else:
            field = error["loc"][0]
        message = error["msg"]
        error_messages.append(f"Field '{field}': {message}")

    error_response = CustomErrorResponse(error="Validation error", code=422, error_description=error_messages)
    return JSONResponse(content=error_response.dict(), status_code=422)


app.include_router(api_router)


@app.get('/')
def base(request: Request):
    print("hey")
    return "OK"


if __name__ == "__main__" and DEBUG:
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True, log_level="debug", ssl_keyfile="ssl_private_key.pem", ssl_certfile="ssl_certificate.pem",
                workers=1)
    # uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True, log_level="debug", workers=1)
