from flask_app import app
from flask import render_template, request, redirect, session, flash
from time import strftime
from flask_app.models.user import User
from flask_app.models.car import Car

@app.route("/")
def index():
    
    if not session.get('user_id'):
        return redirect("/login")

    cars = Car.get_all()

    return render_template("index.html", all_cars = cars)

@app.route("/new_car")
def new_car():
    
    if not session.get('user_id'):
        return redirect("/login")
    
    return render_template("new_car.html")
    

@app.route("/add_car", methods=["POST"])
def add_car():
    user_id = session['user_id']
    data = {
        'color':    request.form['color'],
        'seats':    request.form['seats'],
        'user_id':  user_id
    }
    
    Car.save(data)
    
    return redirect("/")
