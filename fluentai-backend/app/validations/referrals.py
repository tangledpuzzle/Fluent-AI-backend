from pydantic import BaseModel, PositiveInt, Field
from typing import Optional
from fastapi import Query
from config import DEFAULT_PAGINATION_PAGE, DEFAULT_PAGINATION_LIMIT


class UserList(BaseModel):
    page: PositiveInt = Field(Query(DEFAULT_PAGINATION_PAGE, description="Page number"))
    limit: PositiveInt = Field(Query(DEFAULT_PAGINATION_LIMIT, description="Number of items per page"))
