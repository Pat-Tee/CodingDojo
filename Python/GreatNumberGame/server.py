from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = '91^64.3[4 42'

@app.route('/')
def index():

    if not session.get('myNum'):    # its a good thing the range starts at 1; i learned that if you hold a 0 in
                                    # the variable using this kind of check then
                                    # the conditional will trigger and you end up with always initializing the 
                                    # variable whenever the route is called. Obvious, after the fact
        session['myNum'] = random.randint(1,100)
        session['colorDiff'] = 200
    print('My number is', session['myNum'])
    
    return render_template('index.html')

@app.route('/check', methods=['POST'])
def check():
    userGuess = request.form
    
    g = int(userGuess['guess'])
    mn= int(session['myNum'])
    d = g - mn   
    session['colorDiff'] = d    # I computed the difference between the guess and the random number.
                                # That allows for very specific and direct comparisons. Originally I
                                # was going to be cute and make the color change as graded by the difference
                                # but maybe another time. The math involved in doing that on an RGB seems waay
                                # beyond the scope of this project and my desire to do it

    return redirect('/')

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

@app.errorhandler(404)
def unknown(err):
    return '404 : NOT FOUND!'

if __name__=="__main__":
    app.run(debug=True)