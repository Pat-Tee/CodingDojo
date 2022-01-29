from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

SCHEMA = 'users_schema'
LOGIN_REGEX = re.compile(r'^[a-zA-Z0-9]+$')
NAME_REGEX  = re.compile(r'^[a-zA-Z]+$')
PW_REGEX    = re.compile(r'^[a-zA-Z0-9]+$')
PW_HC_REGEX = re.compile(r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$")
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__(self, data):
        self.id = data['id']
        self.login = data['login']
        self.password   = data['password']
        self.first_name = data['first_name']
        self.last_name  = data['last_name']
        self.email      = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def valid_login(user):
        login_valid = False
        pw_valid    = False
        length = len(user['login'])
        if ( length >= 3 and length <= 16 ):
            if LOGIN_REGEX.match(user['login']):
                login_valid = True
        length = len(user['password'])
        if ( length >= 8 and length <= 24 ):
            if PW_REGEX.match(user['password']):
                pw_valid = True
        return login_valid and pw_valid

    @staticmethod
    def valid_new_user(user):
        fname_valid = False
        lname_valid = False
        email_valid = False
        login_valid = False
        pw_valid    = False
        ############--Login name
        length = len(user['login'])
        if ( length >= 3 and length <= 16 ):
            if LOGIN_REGEX.match(user['login']):
                login_valid = True
            else: 
                flash('Login must be alphanumeric only.', 'warning')
                print('Login must be alphanumeric only.', 'warning')
        else: 
            flash("Login name must be at least 3 characters and no more than 16 characters long.", 'warning')
            print("Login name must be at least 3 characters and no more than 16 characters long.", 'warning')
        ############--Password
        length = len(user['password'])
        if user['password'] == user['pw_verify'] :
            if ( length >= 8 and length <= 24 ):
                if PW_REGEX.match(user['password']):
                    pw_valid = True
                else:
                    flash('Password must be alphanumeric only.', 'warning')
                    print('Password must be alphanumeric only.', 'warning')
            else:
                flash("Password must be at least 8 characters and no more than 24 characters long.", 'warning')
                print("Password must be at least 8 characters and no more than 24 characters long.", 'warning')
        else:
            flash('Passwords do not match!', 'error')
            print('Passwords do not match:', user['password'], user['pw_verify'])
        ##############--FIRST NAME
        length = len(user['first_name'])
        if ( length >= 3 and length <= 16 ):
            if NAME_REGEX.match(user['first_name']):
                fname_valid = True
                print('first name is valid')
            else: 
                flash('First name must be letters only.', 'warning')
                print('First name must be letters only.', 'warning')
        else: 
            flash("First name must be at least 3 characters and no more than 16 characters long.", 'warning')
            print("First name must be at least 3 characters and no more than 16 characters long.", 'warning')
        ##############--LAST NAME
        length = len(user['last_name'])
        if ( length >= 3 and length <= 32 ):
            if NAME_REGEX.match(user['last_name']):
                lname_valid = True
                print('last name is valid')
            else: 
                flash('Last name must be letters only.', 'warning')
                print('Last name must be letters only.', 'warning')
        else: 
            flash("Last name must be at least 3 characters and no more than 32 characters long.", 'warning')
            print("Last name must be at least 3 characters and no more than 32 characters long.", 'warning')
        ##############--EMAIL
        length = len(user['email'])
        if ( length >= 5 and length <= 48 ):
            if EMAIL_REGEX.match(user['email']):
                email_valid = True
                print('email is valid')
            else: 
                flash('Email address is not valid.', 'error')
                print('Email address is not valid.', 'error')
        else: 
            flash("Email address must be at least 5 characters and no more than 48 characters long.", 'warning')
            print("Email address must be at least 5 characters and no more than 48 characters long.", 'warning')
            
        print('combined valid states are:', fname_valid and lname_valid and email_valid and login_valid and pw_valid)
        return (fname_valid and lname_valid and email_valid and login_valid and pw_valid)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users ORDER BY created_at DESC;"
        results = connectToMySQL(SCHEMA).query_db(query)
        entries = []
        for item in results:
            entries.append(cls(item))
        return entries

    @classmethod
    def get_one(cls, data):
        query = 'SELECT * FROM users WHERE id = %(id)s'
        results = connectToMySQL(SCHEMA).query_db(query, data)
        
        if results:
            return results[0]
        else:
            return results

    @classmethod
    def save(cls, data):
        query = "INSERT INTO users ( login, password, first_name, last_name , email, created_at, updated_at ) VALUES ( %(login)s, %(password)s, %(first_name)s , %(last_name)s, %(email)s , NOW() , NOW() );"
        return connectToMySQL(SCHEMA).query_db(query, data)

    @classmethod
    def edit(cls, data):
        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s, updated_at=NOW() WHERE id =%(id)s"
        return connectToMySQL(SCHEMA).query_db(query, data)

    @classmethod
    def get_login(cls, data):
        query = "SELECT * FROM users WHERE login = %(login)s"
        results = connectToMySQL(SCHEMA).query_db(query, data)
        if results:
            return results[0]
        else:
            return results

    @classmethod
    def check_new(cls, data):
        query = "SELECT id FROM users WHERE (first_name = %(first_name)s AND last_name = %(last_name)s AND email = %(email)s) OR login=%(login)s"
        results = connectToMySQL(SCHEMA).query_db(query, data)
        if results:
            return results[0]
        else:
            return results

    @classmethod
    def remove(cls, data):
        query = "DELETE FROM users WHERE id = %(id)s;"
        return connectToMySQL(SCHEMA).query_db(query, data)
