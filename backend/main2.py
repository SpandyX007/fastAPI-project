from typing import Union

from fastapi import FastAPI,Request
from fastapi.responses import HTMLResponse
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os
from dotenv import load_dotenv
load_dotenv()


app = FastAPI()
# app.mount("/static", StaticFiles(directory="static"), name="static")
# templates = Jinja2Templates(directory="templates")
mongo_uri=os.getenv("MONGO_URI")
print(mongo_uri)
client = MongoClient(mongo_uri, server_api=ServerApi('1'))
docs=client.fastapitest.fastapitest.find_one({})
print(docs)


