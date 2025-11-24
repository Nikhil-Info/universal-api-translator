from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from .. import models, schemas

router = APIRouter(
    prefix="/projects",
    tags=["projects"],
)

@router.post("/", response_model=schemas.Project)
def create_project(project: schemas.ProjectCreate, user_id: int, db: Session = Depends(get_db)):
    db_project = models.Project(**project.dict(), owner_id=user_id)
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project

@router.get("/", response_model=List[schemas.Project])
def read_projects(user_id: int, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    projects = db.query(models.Project).filter(models.Project.owner_id == user_id).offset(skip).limit(limit).all()
    return projects

@router.get("/{project_id}", response_model=schemas.Project)
def read_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(models.Project).filter(models.Project.id == project_id).first()
    if project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    return project
