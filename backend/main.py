from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

class Car(BaseModel):
    name:str

class Cars(BaseModel):
    cars:List[Car]

app=FastAPI()
origins=['http://localhost:5173','https://fast-api-project-two.vercel.app','https://fast-api-project-79l13rupf-spandys-projects.vercel.app','fast-api-project-spandys-projects.vercel.app','fast-api-project-git-main-spandys-projects.vercel.app']
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"])

# temporary database
memory_db={"All Cars":[]}

# this route help to print all the cars in the memory_db
@app.get("/cars", response_model=Cars)
async def get_cars():
    return Cars(cars=memory_db["All Cars"])  #converting to json format

@app.post("/cars", response_model=Car)
async def add_cars(car:Car):
    memory_db["All Cars"].append(car)
    return car