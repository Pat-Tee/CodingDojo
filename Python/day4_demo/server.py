from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = '91^64.3[4 42'

@app.route('/')
def index():
    return render_template("index.html")

@app.errorhandler(404)
def unknown(err):
    return '404 : NOT FOUND!'

if __name__== "__main__":
    app.run(debug=True)