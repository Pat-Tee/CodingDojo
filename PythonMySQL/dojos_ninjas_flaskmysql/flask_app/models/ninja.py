from flask_app.config.mysqlconnection import connectToMySQL

class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age        = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def add_ninja(cls, data):
        query = "INSERT INTO ninjas ( first_name , last_name , age, created_at, updated_at, dojo_id ) VALUES ( %(fname)s , %(lname)s , %(age)s , NOW() , NOW(), %(dojo_id)s);"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas;"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query)
        ninjas = []
        for ninja in results:
            ninjas.append(cls(ninja))
        return ninjas

    @classmethod
    def get_one(cls, data):
        query = 'SELECT * FROM ninjas WHERE id = %(id)s'
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        return cls(results[0])
    
    @classmethod
    def get_all_from(cls, data):
        query = "SELECT * FROM ninjas WHERE ninjas.dojo_id = %(id)s;"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        ninjas = []
        for ninja in results:
            ninjas.append(cls(ninja))
        return ninjas
