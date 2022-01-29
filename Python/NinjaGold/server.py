from flask import Flask, render_template, request, redirect, session
from random import randint
import time
app = Flask(__name__)
app.secret_key = '91^64.3[4 42'

@app.route('/')
def index():
    if not session:
        session['gold'] = 0
        session['history'] = {
            'place' : [],
            'gold'  : [],
            'datetime':[],
            'message': ""
            }

    return render_template("index.html")

@app.route('/process_money', methods=['POST'])
def process_money():
    userChoice = request.form.get('destination')
    gold = 0
    localtime = time.asctime( time.localtime(time.time()) )
    goldRange = {
        'farm' : [10,20],
        'cave'  : [5,10],
        'house' : [2,5],
        'casino': [-50,50] }

    history = session['history']
    gold = randint(goldRange[userChoice][0], goldRange[userChoice][1])

    session['gold'] += gold;
    if session['gold'] < 0:
        session['gold'] = 0
    
    history['place'].append(userChoice)
    history['gold'].append(gold)
    history['datetime'].append(localtime)
    print(history)
    
    if (gold >= 0):
        msg = '<p>You went to the '+userChoice+' and got '+str(gold)+' gold! ---- '+localtime+'</p>'
    else:
        gold = gold - gold - gold;
        msg= "<p style='color:red'>You went to the "+userChoice+' and lost '+str(gold)+' gold! ---- '+localtime+'</p>'
    session['history']['message'] += msg

    return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
    session.clear()
    return redirect('/')

@app.errorhandler(404)
def unknown(err):
    return '404 : NOT FOUND!'

if __name__=="__main__":
    app.run(debug=True)