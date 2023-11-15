from pydantic import BaseModel, Field, PositiveInt, Field
from typing import Optional
from fastapi import UploadFile, Form,Query
from config import DEFAULT_PAGINATION_PAGE, DEFAULT_PAGINATION_LIMIT

class ChatAudio(BaseModel):
    # audio: Optional[UploadFile]
    language: int = Form(None, description="Optional language input")
    message: str = Form(None, description="Optional language input")


class ChatQuery(BaseModel):
    language: int = Field(None, description="Optional language input")
    message: Optional[str] = Field(None, description="Optional language input")
    
class Assessment(BaseModel):
    audio: Optional[UploadFile]
    message: Optional[str] = Field(None, description="Optional language input")


class ChatList(BaseModel):
    page: PositiveInt = Field(Query(DEFAULT_PAGINATION_PAGE, description="Page number"))
    limit: PositiveInt = Field(Query(DEFAULT_PAGINATION_LIMIT, description="Number of items per page"))


class Translate(BaseModel):
    language: int
    message: str


class GetURL(BaseModel):
    path: str

