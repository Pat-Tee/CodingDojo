from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

# from flask_app import app
# from flask_bcrypt import Bcrypt
# bcrypt = Bcrypt(app)

#create a hashedpass: bcrypt.generate_password_hash(password_string)
#to compare input to stored hashpass: bcrypt.check_password_hash(hashed_password, password_string)
LOGIN_REGEX = re.compile(r'^[a-zA-Z0-9]+$')
PW_REGEX = re.compile(r'^[a-zA-Z0-9_-]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
#use EMAIL_REGEX.match(RENAME_DICT['KEY'])
#for flash use something like 'flash("Email cannot be blank!", 'email')' to categorize a message with a category identifier

class Login:
    def __init__(self, data):
        self.id         = data['id']
        self.name       = data['name']
        self.password   = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def valid(login):
        name_is_valid = False
        pw_is_valid = False
        
        length = len(login['name'])
        if ( length < 3 or length > 45 ):
            flash("Login name must be at least 3 characters and no more than 45 characters long.")
        elif not LOGIN_REGEX.match(login['name']):
            flash("This is not a valid login name.")
        else: 
            name_is_valid = True
            
        length = len(login['password'])
        if ( length < 8 or length > 24 ):
            flash("Login password must be at least 8 characters and no more than 24 characters long.")
        elif not PW_REGEX.match(login['password']):
            flash("This is not a valid login password.")
        else: 
            pw_is_valid = True
            
        print('Login validation returned: ', (name_is_valid and pw_is_valid))
        return (name_is_valid and pw_is_valid)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM logins"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('login_schema').query_db(query)
        # Create an empty list to append our instances
        entries = []
        # Iterate over the db results and create instances with cls.
        for item in results:
            entries.append(cls(item))
        return entries

    @classmethod
    def get_one(cls, data):
        query = 'SELECT * FROM logins WHERE id = %(id)s'
        results = connectToMySQL('login_schema').query_db(query, data)
        
        if results:
            return results[0]
        else:
            return results

    @classmethod
    def save(cls, data):
        query = "INSERT INTO logins ( name, password, created_at, updated_at ) VALUES ( %(name)s , %(password)s , NOW() , NOW() );"

        return connectToMySQL('login_schema').query_db(query, data)

    @classmethod
    def edit(cls, data):
        query = "UPDATE logins SET name = %(name)s, password = %(password)s, updated_at=NOW() WHERE id =%(id)s"
        return connectToMySQL('login_schema').query_db(query, data)

    @classmethod
    def check(cls, data):
        query = "SELECT * FROM logins WHERE name = %(name)s"
        results = connectToMySQL('login_schema').query_db(query, data)
        if results:
            return results[0]
        else:
            flash("That login information was not found.")
            return results

    @classmethod
    def remove(cls, data):
        query = "DELETE FROM logins WHERE id = %(id)s"
        return connectToMySQL('login_schema').query_db(query, data)
