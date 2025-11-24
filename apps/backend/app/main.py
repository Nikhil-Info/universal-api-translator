from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Universal API Translator")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from .routers import auth, projects, converter
from .database import engine, Base

Base.metadata.create_all(bind=engine)

app.include_router(auth.router)
app.include_router(projects.router)
app.include_router(converter.router)

@app.get("/")
def read_root():
    return {"message": "Universal API Translator Backend is running"}
