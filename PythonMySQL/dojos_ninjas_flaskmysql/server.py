from flask_app import app
from flask_app.controllers import dojos, ninjas
from flask import redirect

@app.route('/')
def viewDojos():
    return redirect('/dojos')

@app.errorhandler(404)
def unknown(err):
    return '404 : NOT FOUND!'

if __name__=="__main__":
    app.run(debug=True)
