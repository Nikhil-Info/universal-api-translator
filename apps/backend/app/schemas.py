from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class UserBase(BaseModel):
    email: str
    clerk_id: str

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

class ProjectBase(BaseModel):
    name: str
    description: Optional[str] = None

class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: int
    owner_id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class ApiSpecBase(BaseModel):
    name: str
    spec_type: str
    content: str

class ApiSpecCreate(ApiSpecBase):
    pass

class ApiSpec(ApiSpecBase):
    id: int
    project_id: int
    created_at: datetime

    class Config:
        from_attributes = True

class TranslationCreate(BaseModel):
    source_spec_id: int
    target_format: str

class Translation(BaseModel):
    id: int
    project_id: int
    source_spec_id: int
    target_format: str
    result_content: Optional[str] = None
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
