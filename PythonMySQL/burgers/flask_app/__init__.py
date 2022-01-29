# __init__.py
from flask import Flask
from mysqlconnection import connectToMySQL
app = Flask(__name__)

app.secret_key = "BENNY BOB WUZ HEER."
