from flask_app import app
from flask import render_template, request, redirect, session, flash
from time import strftime
from flask_app import app
from flask_bcrypt import Bcrypt
from flask_app.models.LOGIN import Login
from flask_app.models.users import User

bcrypt = Bcrypt(app)

@app.route("/")
def index():
    
    if not session.get('name'):
        return redirect("/login")
    
    user = User.get_all()
    return render_template("index.html", all_users = user)

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
        'name' :      request.form['name'],
        'password':   request.form['password']
        }
    valid = Login.valid(data)
    if not valid:
        flash('This is not a valid login.', 'warning')
        return redirect('/login')
    
    pw_hash = bcrypt.generate_password_hash(data['password'])
    data['password'] = pw_hash
    if Login.check(data):
        session['name'] = data['name']
        session['logged_in'] = True
        session['isValid']  = True
        msg = 'Welcome, '+ data['name']+'!'
        flash(msg, 'info')
    return redirect("/")

@app.route("/register", methods = ["POST"])
def register():
    data = {
        'name'       :      request.form['new_login'],
        'first_name' :      request.form['new_first_name'],
        'last_name' :       request.form['new_last_name'],
        'password':   request.form['new_password'],
        'pw_verify':  request.form['new_password_verify'],
        'email':      request.form['new_email'],
        'login_id': 0
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
    if not Login.check(data):
        if not User.check(data):
            data['login_id'] = Login.save(data)
            print('Login.save returned:', data['login_id'])
            User.save(data)
            session['name'] = data['name']
            session['logged_in'] = True
            session['isValid']  =True
            msg = 'Welcome, '+ data['name']+'!'
            flash(msg, 'info')
        else:
            flash('This user already exists!')
    else:
        flash('This login already exists!')
    return redirect("/")

@app.route('/view', methods=['POST'])
def get_one():
    if not session.get('logged_in'):
        return redirect('/')
    data = {
        'id': request.form['id']
    }
    user = User.get_one(data)    
    print('Good so far!')
    return redirect(F"/view/{data['id']}")

@app.route('/view/<int:id>')
def view(id):
    if not session.get('logged_in'):
        return redirect('/')
    data = {
        'id': id
    }
    user = User.get_one(data)
    return render_template('view.html', user=user)

@app.route('/add', methods=["POST"])
def new():
    if not session.get('logged_in'):
        return redirect('/')
    data = {
        'first_name'    : request.form['first_name'],
        'last_name'     : request.form['last_name'],
        'email'         : request.form['email'],
        'login_id'      : 0,
        'password'      : ''
    }
    
    if not User.valid(data):
        session['isValid'] = False
        return redirect('/')
    check = User.check(data)
    if (check):
        msg = "That user already exists!"
        session['isValid'] = False
        flash(msg)
        return redirect(F"/view/{check['id']}")
    User.save(data)
    session['isValid'] = True
    msg = "'" + data['first_name'] + "' added successfully!"
    flash(msg)
    return redirect('/')

@app.route('/edit', methods=['POST'])
def edit():
    if not session.get('logged_in'):
        return redirect('/')
    data = {
        'id' : request.form['id']
    }
    user = User.get_one(data)
    return render_template('edit.html', user=user)

@app.route('/edit/<int:id>')
def edit_id(id):
    
    if not session.get('logged_in'):
        return redirect('/')
    data = {
        'id' : id
    }
    user = User.get_one(data)
    return render_template('edit.html', user=user)

@app.route('/update', methods=['POST'])
def update():
    if not session.get('logged_in'):
        return redirect('/')
    data = {
        'id': request.form['id'],
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'login_id': 0
    }
    if not User.valid(data):
        print('Checking if input from form is valid...')
        session['isValid'] = False
        flash('Invalid input')
        return redirect(F"/edit/{data['id']}")
    user = User.get_one(data)
    if User.edit(data):
        session['isValid'] = False
        flash('Something went wrong trying to update the login entry.')
    else:
        session['isValid'] = True
        print('input form WAS valid')
        flash("Update was successful!")
    return redirect(F"/view/{data['id']}")

@app.route('/delete', methods=["POST"])
def remove():
    if not session['logged_in']:
        return redirect('/')
    data = {
        "id": request.form["id"],
        "login_id": 0
    }
    
    user = User.get_one(data)
    data['login_id'] = user['login_id']
    
    if User.remove(data):
        session['isValid'] = False
        flash('Something went wrong trying to delete the user entry.')
    data['id'] = data['login_id']
    if Login.remove(data):
        session['isValid'] = False
        flash('Something went wrong trying to delete the login entry.')
    else:
        session['isValid'] = True
        flash("Database entry deleted successfully!")
    return redirect('/')

@app.errorhandler(404)
def unknown(err):
    return '404 : NOT FOUND!'
