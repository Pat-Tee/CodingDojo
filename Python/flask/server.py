from os import X_OK
from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"

@app.route('/')
def play8x8():
    tilesX = tilesY = 8
    color1 = 'red'
    color2 = 'black'
    return render_template('index.html', tilesX = int(tilesX), tilesY = int(tilesY), color1=color1, color2=color2)

@app.route('/4')
def play4x4():
    tilesX = tilesY = 4
    color1 = 'red'
    color2 = 'black'
    return render_template('index.html', tilesX = int(tilesX), tilesY = int(tilesY), color1=color1, color2=color2)

@app.route('/<x>/<y>')
def playXxY(x,y):
    tilesX = x
    tilesY = y
    color1 = 'red'
    color2 = 'black'
    return render_template('index.html', tilesX = int(tilesX), tilesY = int(tilesY), color1=color1, color2=color2)

@app.route('/play/<tilesX>/<tilesY>/<color1>/<color2>')
def playCustom(tilesX=8, tilesY=8, color1='skyblue', color2='lightred'):
    return render_template('index.html', tilesX = int(tilesX), tilesY = int(tilesY), color1=color1, color2=color2)
        
@app.errorhandler(404)
def unknown(err):
    return 'Sorry! No response, try again <br> hello <br> hello <br> world'

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
