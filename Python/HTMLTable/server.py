from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def main():
    users = [
    {'first_name' : 'Michael', 'last_name' : 'Choi'},
    {'first_name' : 'John', 'last_name' : 'Supsupin'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
    numUsers = len(users)
    return render_template('index.html', users = users, numUsers = numUsers)

@app.errorhandler(404)
def unknown(err):
    return 'Sorry! No response, try again'

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
