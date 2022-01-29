from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = '!just a secret key!'

@app.route('/', methods=['POST', 'GET'])
def home():
    
    count = session.get('count')
    views = session.get('views')
    
    if not views:
        session['views'] = 1
    else:
        session['views'] += 1
    
    if not count:
        session['count'] = 1
    else:
        session['count'] += 1
        
    return render_template('index.html')

@app.route('/reset', methods=['POST','GET'])
def reset():
    session.clear()
    return redirect('/')

@app.route('/addx', methods=['POST','GET'])
def addx():
    userForm = request.form
    session['count'] += int(userForm['numAdd']) - 1
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)

