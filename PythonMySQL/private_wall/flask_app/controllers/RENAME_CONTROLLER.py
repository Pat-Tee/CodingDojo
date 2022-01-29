from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_app.models.RENAME_MODEL import RENAME_CLASS
from time import strftime
from flask_app import app
from flask_bcrypt import Bcrypt
from flask_app.models.LOGIN import Login

bcrypt = Bcrypt(app)

@app.route("/")
def index():
    
    if not session.get('name'):
        return redirect("/login")
    
    RENAME_VAR = RENAME_CLASS.get_all()
    return render_template("index.html", RENAME_TEMPLATE_ID=RENAME_VAR)

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
        'name' :      request.form['new_name'],
        'password':   request.form['new_password'],
        'pw_verify':  request.form['new_password_verify'],
        'email':      request.form['new_email']
        }
    valid = Login.valid(data)
    
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
        session['name'] = data['name']
        session['logged_in'] = True
        session['isValid']  =True
        msg = 'Welcome, '+ data['name']+'!'
        flash(msg, 'info')
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
    RENAME_VAR = RENAME_CLASS.get_one(data)    
    print('Good so far!')
    return redirect(F"/view/{data['id']}")

@app.route('/view/<int:id>')
def view(id):
    if not session.get('logged_in'):
        return redirect('/')
    data = {
        'id': id
    }
    RENAME_VAR = RENAME_CLASS.get_one(data)
    return render_template('view.html', RENAME_TEMPLATE_ID=RENAME_VAR)

@app.route('/add', methods=["POST"])
def new():
    if not session.get('logged_in'):
        return redirect('/')
    data = {
        'RENAME_DATA_KEY' : request.form['RENAME_DATA_KEY']
    }
    
    if not RENAME_CLASS.valid(data):
        session['isValid'] = False
        return redirect('/')
    check = RENAME_CLASS.check(data)
    if (check):
        msg = "'"+ data['RENAME_DATA_KEY']+ "' already exists!"
        session['isValid'] = False
        flash(msg)
        return redirect(F"/view/{check['id']}")
    RENAME_CLASS.save(data)
    session['isValid'] = True
    msg = "'" + data['RENAME_DATA_KEY'] + "' added successfully!"
    flash(msg)
    return redirect('/')

@app.route('/edit', methods=['POST'])
def edit():
    if not session.get('logged_in'):
        return redirect('/')
    data = {
        'id' : request.form['id']
    }
    RENAME_VAR = RENAME_CLASS.get_one(data)
    return render_template('edit.html', RENAME_TEMPLATE_ID=RENAME_VAR)

@app.route('/edit/<int:id>')
def edit_id(id):
    
    if not session.get('logged_in'):
        return redirect('/')
    data = {
        'id' : id
    }
    RENAME_VAR = RENAME_CLASS.get_one(data)
    return render_template('edit.html', RENAME_TEMPLATE_ID=RENAME_VAR)

@app.route('/update', methods=['POST'])
def update():
    if not session.get('logged_in'):
        return redirect('/')
    data = {
        'id': request.form['id'],
        'RENAME_DATA_KEY': request.form['RENAME_DATA_KEY']
    }
    if not RENAME_CLASS.valid(data):
        print('Checking if input from form is valid...')
        return redirect(F"/edit/{data['id']}")
    print('input form WAS valid')
    flash("Update was successful!")
    RENAME_VAR = RENAME_CLASS.edit(data)
    return redirect(F"/view/{data['id']}")

@app.route('/delete', methods=["POST"])
def remove():
    if not session['logged_in']:
        return redirect('/')
    data = {
        "id": request.form["id"]
    }
    RENAME_CLASS.remove(data)
    session['isValid'] = True
    flash("Database entry deleted successfully!")
    return redirect('/')

@app.errorhandler(404)
def unknown(err):
    return '404 : NOT FOUND!'
