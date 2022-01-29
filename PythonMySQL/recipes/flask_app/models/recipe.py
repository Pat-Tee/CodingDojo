from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

SCHEMA = 'users_recipes_schema'
NAME_REGEX  = re.compile(r'^[a-zA-Z]+$')

class Recipe:
    def __init__(self, data):
        self.id             = data['id']
        self.name           = data['name']
        self.instructions   = data['instructions']
        self.description    = data['description']
        self.quick          = data['quick']
        self.created_at     = data['created_at']
        self.updated_at     = data['updated_at']
        self.user_id        = data['user_id']

    @staticmethod
    def valid_recipe(data):
        name_valid          = False
        instructions_valid  = False
        description_valid   = False
        
        if (len(data['name']) > 2 and len(data['name']) < 45) and (NAME_REGEX.match(data['name'])):
            name_valid = True
        else: flash("Recipe name must be at least 3 characters long and only letters.", 'warning')
        if (len(data['description']) > 2 and len(data['description']) < 45):
            description_valid = True
        else: flash("Description must be at least 3 characters long.", 'warning')
        if (len(data['instructions']) > 2):
            instructions_valid = True
        else: flash("Instructions must be at least 3 characters long.", 'warning')
        return name_valid and instructions_valid and description_valid
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes ORDER BY name ASC;"
        results = connectToMySQL(SCHEMA).query_db(query)
        entries = []
        for item in results:
            entries.append(cls(item))
        return entries

    @classmethod
    def get_one(cls, data):
        query = 'SELECT * FROM recipes where id = %(id)s'
        results = connectToMySQL(SCHEMA).query_db(query, data)
        if results:
            return results[0]
        else:
            return results

    @classmethod
    def save(cls, data):
        query = "INSERT INTO recipes ( name, description, quick, instructions, created_at, updated_at, user_id) VALUES ( %(name)s, %(description)s, %(quick)s, %(instructions)s, NOW() , NOW(), %(user_id)s );"
        return connectToMySQL(SCHEMA).query_db(query, data)

    @classmethod
    def edit(cls, data):
        query = "UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, quick = %(quick)s, updated_at=NOW() WHERE id =%(id)s"
        return connectToMySQL(SCHEMA).query_db(query, data)

    @classmethod
    def remove(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"
        return connectToMySQL(SCHEMA).query_db(query, data)

class Cookbook:
    def __init__(self, data):
        self.user          = data['user']
        self.recipe        = data['recipe']
        
    @classmethod
    def add(cls, user, recipe):
        data = {
            'user' :    user,
            'recipe' :  recipe
        }
        query = "INSERT INTO users_recipes (user_id, recipe_id) VALUES (%(user)s, %(recipe)s)"
        return connectToMySQL(SCHEMA).query_db(query, data)
    
    @classmethod
    def get_all(cls, user):
        query = f"SELECT * FROM recipes JOIN users JOIN users_recipes ON recipes.id = users_recipes.recipe_id AND users.id = {user} ORDER BY name ASC;"
        results = connectToMySQL(SCHEMA).query_db(query)
        entries = []
        print("RESULTS =================== ",results)
        for item in results:
            entries.append(cls(item))
        return entries
