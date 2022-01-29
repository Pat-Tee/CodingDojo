from flask_app import app
from flask import render_template, request, redirect, session, flash
from time import strftime
from flask_app import app
from flask_bcrypt import Bcrypt
from flask_app.models.user import User
from flask_app.models.car import Car

bcrypt = Bcrypt(app)

@app.route("/login")
def showlogin():
    
    return render_template("login.html")

@app.route("/logout")
def logout():
    
    session.clear();
    return redirect("/")

@app.route("/checklogin", methods=['POST'])
def login():
    data = {
        'login_name' :      request.form['login_name'],
        'password':         request.form['password']
        }
    valid = User.valid_login(data)
    if not valid:
        flash('This is not a valid login.', 'warning')
        return redirect('/login')
    
    pw_hash = bcrypt.generate_password_hash(data['password'])
    data['password'] = pw_hash
    user = User.check_login(data)
    if user:
        session['user_id'] = user['id']
        session['logged_in'] = True
        session['isValid']  = True
        msg = 'Welcome, '+ user['first_name']+'!'
        flash(msg, 'info')
    return redirect("/")

@app.route("/register", methods = ["POST"])
def register():
    data = {
        'first_name' :      request.form['new_first_name'],
        'last_name' :       request.form['new_last_name'],
        'password':   request.form['new_password'],
        'pw_verify':  request.form['new_password_verify'],
        'email':      request.form['new_email'],
        'login_name': request.form['new_login_name']
        }
    valid = User.valid(data)
    
    if data['password'] != data['pw_verify'] :
        flash('Passwords do not match!')
        session['isValid'] = False
        return redirect('/login')
    if not valid:
        flash('This is not a valid login.', 'warning')
        return redirect('/login')
    
    pw_hash = bcrypt.generate_password_hash(data['password'])
    data['password'] = pw_hash
    if not User.check(data):
        user_id = User.save(data)
        session['user_id'] = user_id
        session['logged_in'] = True
        session['isValid']  =True
        msg = 'Welcome, '+ data['first_name']+'!'
        flash(msg, 'info')
    else:
        flash('This user already exists!')

    return redirect("/")

@app.errorhandler(404)
def unknown(err):
    return '404 : NOT FOUND!'
