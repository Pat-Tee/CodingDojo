from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_app.models.recipe import Recipe
from flask_app.models.user import User

@app.route("/dashboard")
def dashboard():
    if not session.get('user_id'):
        return redirect('/')
    data = {
        'id': session['user_id']
    }
    user = User.get_one(data)
    session['user_name'] = user["first_name"]
    # recipes = Cookbook.get_all(session['user_id'])
    recipes = Recipe.get_all()
    return render_template("dashboard.html", user=user, recipes = recipes)

@app.route("/create_recipe")
def create():
    data = {
        'id': session['user_id']
    }
    
    return render_template("create.html")

@app.route("/add_recipe", methods=["POST"])
def add_recipe():
    data = {
        'name': request.form["name"],
        'quick': request.form.get('quick'),
        'description': request.form['description'],
        'instructions': request.form['instructions'],
        'user_id' : session['user_id']
    }
    if Recipe.valid_recipe(data):
        if Recipe.save(data):
            flash("Creation was successful!", 'info')
        else: flash("Creation failed...", 'error')
    else: 
        flash("Recipe entries invalid!", 'error')
        return redirect(f'/create_recipe')
    
    # Cookbook.add(session['user_id'], Recipe.save(data))
    Recipe.save(data)

    return redirect("/dashboard")

@app.route("/view_recipe/<int:id>")
def view_recipe(id):
    data_user = {
        'id': session['user_id'],
    }
    data_recipe = {
        'id': id
    }
    
    user = User.get_one(data_user)
    recipe = Recipe.get_one(data_recipe)
    
    return render_template("view.html", user = user, recipe = recipe)

@app.route("/edit_recipe/<int:id>")
def edit_recipe(id):
    if not session['user_id']:
        return redirect('/login')
    data_user = {
        'id': session['user_id'],
    }
    data_recipe = {
        'id': id
    }
    user = User.get_one(data_user)
    recipe = Recipe.get_one(data_recipe)
    if recipe['user_id'] != session['user_id']:
        return redirect('/dashboard')
    
    return render_template("edit.html", user = user, recipe = recipe)

@app.route("/update_recipe/<int:id>", methods=['POST'])
def update_recipe(id):
    data = {
        'id'            : id,
        'name'          : request.form['name'],
        'description'   : request.form['description'],
        'instructions'  : request.form['instructions'],
        'quick'         : request.form.get('quick')
    }
    if Recipe.valid_recipe(data):
        Recipe.edit(data)
    else: 
        flash("Recipe entries invalid!", 'error')
        return redirect(f'/edit_recipe/{id}')
    flash("Update was a success!",'info')
    return redirect("/dashboard")

@app.route("/delete_recipe/<int:id>")
def delete_recipe(id):
    data = {
        'id': id
    }
    recipe = Recipe.get_one(data)
    if recipe['user_id'] != session['user_id']:
        return redirect('/dashboard')
    Recipe.remove(data)
    
    return redirect("/dashboard")