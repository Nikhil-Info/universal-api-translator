from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from .. import models, schemas
from ..services.parser import parser
from ..services.translator import translator

router = APIRouter(
    prefix="/converter",
    tags=["converter"],
)

@router.post("/parse", response_model=schemas.ApiSpec)
def parse_spec(spec: schemas.ApiSpecCreate, project_id: int, db: Session = Depends(get_db)):
    # Logic to parse the spec and validate it
    try:
        normalized_spec = parser.parse(spec.content, spec.spec_type)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    
    db_spec = models.ApiSpec(**spec.dict(), project_id=project_id)
    db.add(db_spec)
    db.commit()
    db.refresh(db_spec)
    return db_spec

@router.post("/translate", response_model=schemas.Translation)
def translate_spec(translation: schemas.TranslationCreate, project_id: int, db: Session = Depends(get_db)):
    # Fetch the source spec
    source_spec = db.query(models.ApiSpec).filter(models.ApiSpec.id == translation.source_spec_id).first()
    if not source_spec:
        raise HTTPException(status_code=404, detail="Source spec not found")

    # Logic to translate the spec
    result = translator.translate(source_spec.content, translation.target_format)
    
    db_translation = models.Translation(
        project_id=project_id,
        source_spec_id=translation.source_spec_id,
        target_format=translation.target_format,
        result_content=result,
        status="completed"
    )
    db.add(db_translation)
    db.commit()
    db.refresh(db_translation)
    return db_translation
