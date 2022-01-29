from flask_app import app
from flask import render_template, request, redirect, session
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja

@app.route("/dojos")
def index():
    dojos = Dojo.get_all()
    for dicts in dojos:
        print(dicts);
        
    return render_template("index.html", all_dojos=dojos)

@app.route('/dojos/<int:id>')
def showDojo(id):
    dojo_data = {
        'id': id
    }
    dojos = Dojo.get_one(dojo_data)
    ninjas = Ninja.get_all_from(dojo_data)
    return render_template('dojo.html', one_dojo=dojos, all_ninjas=ninjas)

@app.route('/add_dojo', methods=['POST'])
def newDojo():
    data = {
        'name': request.form['name']
    }
    Dojo.add_dojo(data)
    return redirect('/')
