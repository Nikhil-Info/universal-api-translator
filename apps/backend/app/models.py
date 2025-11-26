from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    clerk_id = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    projects = relationship("Project", back_populates="owner")

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    owner_id = Column(Integer, ForeignKey("users.id"))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    owner = relationship("User", back_populates="projects")
    specs = relationship("ApiSpec", back_populates="project")
    translations = relationship("Translation", back_populates="project")

class ApiSpec(Base):
    __tablename__ = "api_specs"

    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, ForeignKey("projects.id"))
    name = Column(String)
    spec_type = Column(String) # OpenAPI, GraphQL, WSDL, etc.
    content = Column(Text) # The raw spec content
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    project = relationship("Project", back_populates="specs")

class Translation(Base):
    __tablename__ = "translations"

    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, ForeignKey("projects.id"))
    source_spec_id = Column(Integer, ForeignKey("api_specs.id"))
    target_format = Column(String) # GraphQL, REST, SDK-Python, etc.
    result_content = Column(Text) # The translated content
    status = Column(String, default="pending") # pending, completed, failed
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    project = relationship("Project", back_populates="translations")
