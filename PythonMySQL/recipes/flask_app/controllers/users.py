from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_bcrypt import Bcrypt
from flask_app.models.user import User

bcrypt = Bcrypt(app)

@app.route("/")
def home():
    if not session.get("user_id"):
        return redirect("/login")
    
    return redirect("/dashboard")

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
        'login' :      request.form['login'],
        'password':    request.form['password']
        }
    valid = User.valid_login(data)
    if not valid:
        flash('This is not a valid login!', 'error')
        return redirect('/login')

    user = User.get_login(data)
    if user:
        if (bcrypt.check_password_hash(user['password'], data['password'])):
            session['user_id'] = user['id']
            msg = 'Welcome, '+ user['first_name']+'!'
            print('User is valid, logged in.')
            flash(msg, 'welcome')
        else:
            flash("This is not a valid login!", 'error')
    else:
        flash("This is not a valid login!", 'error')
            
    return redirect("/")

@app.route("/register", methods = ["POST"])
def register():
    data = {
        'first_name' :  request.form['new_first_name'],
        'last_name' :   request.form['new_last_name'],
        'password':     request.form['new_password'],
        'pw_verify':    request.form['new_password_verify'],
        'email':        request.form['new_email'],
        'login':        request.form['new_login']
        }
    validUser = User.valid_new_user(data)
    if not validUser:
        flash('These are not valid user details!', 'error')
        return redirect('/login')
    pw_hash = bcrypt.generate_password_hash(data['password'])
    data['password'] = pw_hash
    if not User.check_new(data):        #check if user already is in database
        user_id = User.save(data)       #if not, save user in database
        session['user_id'] = user_id
        msg = 'Welcome, '+ data['first_name']+'!'
        flash(msg, 'welcome')
    else:
        flash('This user already exists!','error')
    return redirect("/")

# @app.errorhandler(404)
# def unknown(err):
#     return '404 : NOT FOUND!'
