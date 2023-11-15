from pydantic import BaseModel
from typing import Optional
from fastapi import UploadFile


class Sign_up(BaseModel):
    # first_name: Optional[str]
    # last_name: Optional[str]
    email: str
    password: str
    # image: Optional[str]
    # referal_id: Optional[str]


class Login(BaseModel):
    email: str
    password: str


class VerifyEmail(BaseModel):
    token: str

class GoogleLogin(BaseModel):
    token: str
    referal_id: Optional[str]
