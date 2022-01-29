from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"

@app.route('/play/<times>/<color>')
def play(times=1, color='skyblue'):
    return render_template('playground.html', times = int(times), color=color)
        
@app.errorhandler(404)
def unknown(err):
    return 'Sorry! No response, try again'

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
