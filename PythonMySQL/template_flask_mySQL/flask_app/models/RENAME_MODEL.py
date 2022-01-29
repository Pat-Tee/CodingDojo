from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
# from flask_app import app
# from flask_bcrypt import Bcrypt
# bcrypt = Bcrypt(app)

#create a hashedpass: bcrypt.generate_password_hash(password_string)
#to compare input to stored hashpass: bcrypt.check_password_hash(hashed_password, password_string)
RENAME_REGEX = re.compile(r'^[a-zA-Z0-9]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
#use EMAIL_REGEX.match(RENAME_DICT['KEY'])
#for flash use something like 'flash("Email cannot be blank!", 'email')' to categorize a message with a category identifier

class RENAME_CLASS:
    def __init__(self, data):
        self.id = data['id']
        self.RENAME_DATA_KEY = data['RENAME_DATA_KEY']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def valid(RENAME_CLASS):
        is_valid = False
        length = len(RENAME_CLASS['RENAME_DATA_KEY'])
        if ( length < 3 or length > 16 ):
            print('RENAME_DATA is outside length range check')
            flash("RENAME_DATA_KEY must be at least 3 characters and no more than 16 characters long.")
        elif not RENAME_REGEX.match(RENAME_CLASS['RENAME_DATA_KEY']):
            print(RENAME_CLASS['RENAME_DATA_KEY'])
            flash("This is not a valid RENAME_DATA.")
            print('RENAME_DATA does not pass REGEX filter check')
        else: 
            is_valid = True
            
        return is_valid

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM RENAME_TABLE ORDER BY created_at DESC;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('RENAME_SCHEMA').query_db(query)
        # Create an empty list to append our instances
        entries = []
        # Iterate over the db results and create instances with cls.
        for item in results:
            entries.append(cls(item))
        return entries

    @classmethod
    def get_one(cls, data):
        query = 'SELECT * FROM RENAME_TABLE WHERE id = %(id)s'
        results = connectToMySQL('RENAME_SCHEMA').query_db(query, data)
        
        if results:
            return results[0]
        else:
            return results
        # return cls(results[0]) <====- I could not figure out how to interact with whatever this returns. That's why I do the above so I can manipulate
        # the results return from the mysqlconnection the same as if it was multiple results

    @classmethod
    def save(cls, data):
        query = "INSERT INTO RENAME_TABLE ( RENAME_DATA_KEY , created_at, updated_at ) VALUES ( %(RENAME_DATA_KEY)s , NOW() , NOW() );"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('RENAME_SCHEMA').query_db(query, data)

    @classmethod
    def edit(cls, data):
        query = "UPDATE RENAME_TABLE SET RENAME_DATA_KEY = %(RENAME_DATA_KEY)s, updated_at=NOW() WHERE id =%(id)s"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('RENAME_SCHEMA').query_db(query, data)

    @classmethod    #Check if entry already exists, if so return that entry.
    def check(cls, data):
        query = "SELECT * FROM RENAME_TABLE WHERE RENAME_DATA_KEY = %(RENAME_DATA_KEY)s"
        #will return any matches to the key
        results = connectToMySQL('RENAME_SCHEMA').query_db(query, data)
        if results:
            return results[0]
        else:
            return results

    @classmethod
    def remove(cls, data):
        query = "DELETE FROM RENAME_TABLE WHERE id = %(id)s"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('RENAME_SCHEMA').query_db(query, data)
