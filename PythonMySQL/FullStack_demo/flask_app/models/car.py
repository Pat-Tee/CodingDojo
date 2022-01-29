from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
# from flask_app import app
# from flask_bcrypt import Bcrypt
# bcrypt = Bcrypt(app)

#create a hashedpass: bcrypt.generate_password_hash(password_string)
#to compare input to stored hashpass: bcrypt.check_password_hash(hashed_password, password_string)
NAME_REGEX = re.compile(r'^[a-zA-Z0-9]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
#use EMAIL_REGEX.match(RENAME_DICT['KEY'])
#for flash use something like 'flash("Email cannot be blank!", 'email')' to categorize a message with a category identifier

class Car:
    def __init__(self, data):
        self.id = data['id']
        self.color      = data['color']
        self.seats      = data['seats']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.login_id   = data['user_id']

    @staticmethod
    def valid(car):
        is_valid = True
        return is_valid
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM cars ORDER BY created_at DESC;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('users_cars_schema').query_db(query)
        # Create an empty list to append our instances
        entries = []
        # Iterate over the db results and create instances with cls.
        for item in results:
            entries.append(cls(item))
        return entries

    @classmethod
    def get_one(cls, data):
        query = 'SELECT * FROM cars WHERE id = %(id)s'
        results = connectToMySQL('users_cars_schema').query_db(query, data)
        
        if results:
            return results[0]
        else:
            return results
        # return cls(results[0]) <====- I could not figure out how to interact with whatever this returns. That's why I do the above so I can manipulate
        # the results return from the mysqlconnection the same as if it was multiple results

    @classmethod
    def save(cls, data):
        query = "INSERT INTO cars ( color, seats, created_at, updated_at, user_id ) VALUES ( %(color)s , %(seats)s, NOW() , NOW(), %(user_id)s );"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('users_cars_schema').query_db(query, data)

    @classmethod
    def edit(cls, data):
        query = "UPDATE cars SET color = %(color)s, seats = %(seats)s, updated_at=NOW() WHERE id = %(id)s"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('users_cars_schema').query_db(query, data)

    @classmethod    #Check if entry already exists, if so return that entry.
    def check(cls, data):
        query = "SELECT * FROM cars WHERE user_id = %(user_id)s"
        #will return any matches to the key
        results = connectToMySQL('users_cars_schema').query_db(query, data)
        if results:
            return results[0]
        else:
            return results

    @classmethod
    def remove(cls, data):
        query = "DELETE FROM cars WHERE id = %(id)s;"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('users_cars_schema').query_db(query, data)
