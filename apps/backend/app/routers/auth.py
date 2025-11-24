from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..database import get_db
from .. import models, schemas

router = APIRouter(
    prefix="/auth",
    tags=["auth"],
)

@router.post("/validate", response_model=schemas.User)
def validate_user(user_data: schemas.UserCreate, db: Session = Depends(get_db)):
    # In a real app, we would verify the Clerk token here.
    # For now, we'll just ensure the user exists in our DB.
    db_user = db.query(models.User).filter(models.User.clerk_id == user_data.clerk_id).first()
    if not db_user:
        db_user = models.User(email=user_data.email, clerk_id=user_data.clerk_id)
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
    return db_user
