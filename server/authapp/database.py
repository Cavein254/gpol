from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os


load_dotenv()

database_url = os.getenv("DATABASE_URL")
engine = create_engine(database_url)
Base = declarative_base(engine)

SessionLocal = sessionmaker(bind=engine, expire_on_commit=False)