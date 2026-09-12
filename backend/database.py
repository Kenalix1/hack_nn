from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
import os

import time
import shutil

DATABASE_URL = os.getenv("DATABASE_URL")

def _get_sqlite_engine():
    db_path = os.path.abspath("cosmohack.db")
    if os.path.isdir(db_path):
        try:
            shutil.rmtree(db_path)
            print(f"Removed invalid directory {db_path} created by docker mount.")
        except Exception as err:
            print(f"Error removing directory {db_path}: {err}")
    return create_engine(f"sqlite:///{db_path}", connect_args={"check_same_thread": False})

if DATABASE_URL:
    connected = False
    for attempt in range(1, 16):
        try:
            engine = create_engine(DATABASE_URL, connect_args={"connect_timeout": 3} if "postgresql" in DATABASE_URL else {})
            with engine.connect() as conn:
                pass
            SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
            connected = True
            print("Successfully connected to DATABASE_URL.")
            break
        except Exception as e:
            print(f"Waiting for database ({e})... attempt {attempt}/15")
            time.sleep(1)

    if not connected:
        print("Warning: Could not connect to DATABASE_URL after retries. Using SQLite fallback.")
        engine = _get_sqlite_engine()
        SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
else:
    engine = _get_sqlite_engine()
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
