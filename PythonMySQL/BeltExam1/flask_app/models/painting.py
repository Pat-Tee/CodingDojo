from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
from  flask_app.models import user

SCHEMA = 'users_paintings_schema'
REGEX_TITLE = re.compile(r'^[a-zA-Z]+$')

class Painting:
    def __init__(self, data):
        self.id             = data['id']
        self.title          = data['title']
        self.description    = data['description']
        self.price          = data['price']
        self.user_id        = data['user_id']
        self.created_at     = data['created_at']
        self.updated_at     = data['updated_at']
        self.artist         = {}

    @staticmethod
    def valid(data):
        title_valid = False
        desc_valid = False
        price_valid = False
        
        if len(data['title']) > 1 and len(data['title']) < 45:
            if REGEX_TITLE.match(data['title']):
                title_valid = True
            else:
                print("Painting title must contain only letters.")
                flash("Painting title must contain only letters.", 'warning')
        else:
            print("Painting title must be at least 2 characters in length and less than 45.")
            flash("Painting title must be at least 2 characters in length and less than 45.", 'warning')
            
        if len(data['description']) > 9 and len(data['description']) < 255:
            desc_valid = True
        else:
            print("Description must be at least 10 characters in length and less than 255.")
            flash("Description must be at least 10 characters in length and less than 255.", 'warning')
        if int(data['price']) > 0:
            price_valid = True
            
        return (title_valid and desc_valid and price_valid)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM paintings;"
        results = connectToMySQL(SCHEMA).query_db(query)
        entries = []
        for item in results:
            entries.append(cls(item))
        return entries

    # @classmethod
    # def get_all_titles_artists(cls):
    #     query = 'SELECT titles, users.first_name, users.last_name FROM paintings JOIN users ON user_id = users.id'
    #     results = connectToMySQL(SCHEMA).query_db(query)
        
    #     entries = []
    #     for item in results:
    #         entries.append(cls(item))
    #     return entries

    @classmethod
    def get_titles_artists(cls):
        query = "SELECT paintings.id, title, first_name, last_name, user_id FROM paintings JOIN users ON user_id = users.id;"
        results = connectToMySQL(SCHEMA).query_db(query)
        entries = []
        for item in results:
            entries.append(item)
        return entries

    @classmethod
    def get_one(cls, data):
        query = 'SELECT * FROM paintings WHERE id = %(id)s'
        results = connectToMySQL(SCHEMA).query_db(query, data)
        
        if results:
            return results[0]
        else:
            return results
        
    @classmethod
    def get_one_artist(cls, data):
        query = 'SELECT * FROM paintings JOIN users ON user_id = users.id WHERE paintings.id = %(id)s'
        results = connectToMySQL(SCHEMA).query_db(query, data)
        
        one_painting = cls(results[0])
        
        artist_data = {
            'id'         : results[0]['users.id'],
            'login'      : results[0]['login'],
            'password'   : results[0]['password'],
            'first_name' : results[0]['first_name'],
            'last_name'  : results[0]['last_name'],
            'email'      : results[0]['email'],
            'created_at' : results[0]['users.created_at'],
            'updated_at' : results[0]['users.updated_at']
        }
        
        one_painting.artist = user.User(artist_data)
        
        if results:
            return one_painting
        else:
            return results

    @classmethod
    def save(cls, data):
        query = "INSERT INTO paintings ( title, description, price, user_id, created_at, updated_at ) VALUES ( %(title)s, %(description)s, %(price)s, %(user_id)s, NOW() , NOW() );"
        return connectToMySQL(SCHEMA).query_db(query, data)

    @classmethod
    def edit(cls, data):
        query = "UPDATE paintings SET title = %(title)s, description = %(description)s, price = %(price)s, updated_at=NOW() WHERE id =%(id)s"
        return connectToMySQL(SCHEMA).query_db(query, data)

    @classmethod
    def check_new(cls, data):
        query = "SELECT id FROM paintings WHERE title = %{titles)s"
        results = connectToMySQL(SCHEMA).query_db(query, data)
        if results:
            return results[0]
        else:
            return results

    @classmethod
    def remove(cls, data):
        query = "DELETE FROM paintings WHERE id = %(id)s;"
        return connectToMySQL(SCHEMA).query_db(query, data)
