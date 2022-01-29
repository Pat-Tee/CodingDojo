from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_app import app
from flask_bcrypt import Bcrypt
from flask_app.models.painting import Painting
from flask_app.models.user import User

@app.route("/paintings")
def paintings():
    if not session.get('user'):
        return redirect('/login')
    
    paintings = Painting.get_titles_artists()
    if not paintings:
        print("Something went wrong pulling data from the DB")
    
    return render_template("index.html", paintings=paintings)

@app.route("/paintings/new")
def show_create():
    if not session.get('user'):
        return redirect('/login')
    
    return render_template("new.html")

@app.route("/paintings/add", methods=['POST'])
def create():
    data = {
        'user_id' :             session['user']['id'],
        'title' :               request.form['title'],
        'description' :         request.form['description'],
        'price' :               request.form['price']
    }
    if not Painting.valid(data):
        flash("Entry fields were incorrectly entered!", 'error')
        return redirect('/paintings/new')
    if not Painting.save(data):
        flash("Painting could not be added.", 'error')
    else: flash("Painting was successfully added!", 'info')
    
    return redirect("/paintings")

@app.route("/paintings/<int:id>")
def show(id):
    
    data = {
        'id' : id
    }
    
    painting = Painting.get_one_artist(data)
    
    return render_template("show.html", painting=painting)

@app.route("/paintings/<int:id>/edit")
def show_edit(id):
    data = {
        'id':id
    }
    if not session.get('user'):
        return redirect('/login')
    return render_template('edit.html', painting = Painting.get_one(data))

@app.route("/paintings/<int:id>/save", methods=['POST'])
def save(id):
    if not session.get('user'):
        return redirect('/login')
    data = {
        'user_id' :             session['user']['id'],
        'id' :                  id,
        'title' :               request.form['title'],
        'description' :         request.form['description'],
        'price' :               request.form['price']
    }
    if not Painting.valid(data):
        flash("Entry fields were incorrectly entered!", 'error')
        return redirect(f'/paintings/{id}/edit')
    
    Painting.edit(data)

    return redirect("/paintings")

@app.route("/paintings/<int:id>/delete")
def delete(id):
    
    data = {
        'id' : id
    }
    
    Painting.remove(data)
    
    return redirect('/paintings')
