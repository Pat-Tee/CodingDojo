from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app
from flask import render_template, request, redirect, session
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo
    
@app.route('/new_ninja')
def new_ninja():
    dojos = Dojo.get_all()
    return render_template('ninja_new.html', all_dojos = dojos)

@app.route('/add_ninja', methods=["POST"])
def Add_ninja():
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "age" : request.form["age"],
        'dojo_id' : request.form['dojo_id']
    }
    Ninja.add_ninja(data)
    return redirect('/new_ninja')
