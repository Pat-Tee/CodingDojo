# import the function that will return an instance of a connection
from flask_app import app
from flask import render_template, request, redirect, session
from flask_app.models.user import User
# Now we use class methods to query our database

@app.route("/")
def index():
    # call the get all classmethod to get all friends
    users = User.get_all()
    
    for dicts in users:
        print(dicts)

    return render_template("index.html", all_users=users)
@app.route('/user/<int:id>')
def showUser(id):
    data = {
        'id': id
    }
    user = User.getOne(data)
    return render_template('user.html', user=user)
    
    
@app.route('/view_user', methods=['POST'])
def getUser():
    data = {
        'id': request.form['id']
    }
    user = User.getOne(data)
    return render_template('user.html', user=user)
# relevant code snippet from server.py

@app.route('/add_user', methods=["POST"])
def newUser():
    # First we make a data dictionary from our request.form coming from our template.
    # The keys in data need to line up exactly with the variables in our query string.
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    }
    # We pass the data dictionary into the save method from the Friend class.
    User.save(data)
    # Don't forget to redirect after saving to the database.
    return redirect('/')

@app.route('/edit_user', methods=['POST'])
def editUser():
    data = {
        'id': request.form['id']
    }
    
    user = User.getOne(data)
    return render_template('edituser.html', user=user)

@app.route('/update_user', methods=['POST'])
def updateUser():
    userID = request.form['id']
    data = {
        'id': userID,
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    }
    
    User.edit(data)
        
    return redirect("/user/%s" % userID)

@app.route('/delete_user', methods=["POST"])
def remUser():
    # First we make a data dictionary from our request.form coming from our template.
    # The keys in data need to line up exactly with the variables in our query string.
    data = {
        "id": request.form["id"]
    }
    # We pass the data dictionary into the save method from the Friend class.
    User.remove(data)
    # Don't forget to redirect after saving to the database.
    return redirect('/')

@app.errorhandler(404)
def unknown(err):
    return '404 : NOT FOUND!'
