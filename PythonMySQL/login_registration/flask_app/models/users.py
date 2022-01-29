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

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name  = data['last_name']
        self.email      = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.login_id   = data['login_id']

    @staticmethod
    def valid(user):
        fname_is_valid = False
        lname_is_valid = False
        email_is_valid = False
            ##############FIRST NAME
        length = len(user['first_name'])
        if ( length < 3 or length > 16 ):
            print('First name is outside length range check')
            flash("First name must be at least 3 characters and no more than 16 characters long.")
        elif not NAME_REGEX.match(user['first_name']):
            print(user['first_name'])
            flash("This is not a valid first name.")
            print('First name does not pass REGEX filter check')
        else: 
            fname_is_valid = True
            ##############LAST NAME
            length = len(user['last_name'])
        if ( length < 3 or length > 16 ):
            print('Last name is outside length range check')
            flash("Last name must be at least 3 characters and no more than 16 characters long.")
        elif not NAME_REGEX.match(user['last_name']):
            print(user['last_name'])
            flash("This is not a valid last name.")
            print('Last name does not pass REGEX filter check')
        else: 
            lname_is_valid = True
            ##############EMAIL
            length = len(user['email'])
        if ( length < 5 or length > 45 ):
            print('E-mail address is outside length range check')
            flash("E-mail address must be at least 3 characters and no more than 45 characters long.")
        elif not EMAIL_REGEX.match(user['email']):
            print(user['email'])
            flash("This is not a valid e-mail address.")
            print('E-mail address does not pass REGEX filter check')
        else: 
            email_is_valid = True
            
        return fname_is_valid and lname_is_valid and email_is_valid

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users ORDER BY created_at DESC;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('logins_registrations_schema').query_db(query)
        # Create an empty list to append our instances
        entries = []
        # Iterate over the db results and create instances with cls.
        for item in results:
            entries.append(cls(item))
        return entries

    @classmethod
    def get_one(cls, data):
        query = 'SELECT * FROM users WHERE id = %(id)s'
        results = connectToMySQL('logins_registrations_schema').query_db(query, data)
        
        if results:
            return results[0]
        else:
            return results
        # return cls(results[0]) <====- I could not figure out how to interact with whatever this returns. That's why I do the above so I can manipulate
        # the results return from the mysqlconnection the same as if it was multiple results

    @classmethod
    def save(cls, data):
        query = "INSERT INTO users ( first_name, last_name , email, created_at, updated_at, login_id ) VALUES ( %(first_name)s , %(last_name)s, %(email)s , NOW() , NOW(), %(login_id)s );"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('logins_registrations_schema').query_db(query, data)

    @classmethod
    def edit(cls, data):
        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s, updated_at=NOW() WHERE id =%(id)s"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('logins_registrations_schema').query_db(query, data)

    @classmethod    #Check if entry already exists, if so return that entry.
    def check(cls, data):
        query = "SELECT * FROM users WHERE (first_name = %(first_name)s AND last_name = %(last_name)s) OR email = %(email)s"
        #will return any matches to the key
        results = connectToMySQL('logins_registrations_schema').query_db(query, data)
        if results:
            return results[0]
        else:
            return results

    @classmethod
    def remove(cls, data):
        query = "DELETE FROM users WHERE id = %(id)s;"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('logins_registrations_schema').query_db(query, data)
