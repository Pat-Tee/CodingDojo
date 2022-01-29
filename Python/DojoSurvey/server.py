from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = '91^64.3[4 42'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST','GET'])
def process():
    user_form = request.form
    print(request.form)

    session['user_first_name'] = user_form.get('first_name')
    session['user_last_name'] = user_form.get('last_name')
    session['user_email'] = user_form.get('email')
    session['user_favoriteLanguage'] = user_form.get('favoriteLanguage')
    session['user_interests'] = user_form.getlist('interests')
    session['user_week'] = user_form.get('week')
    session['user_comments'] = user_form.get('comments')

    return redirect('/result')

@app.route('/result')
def result():
    return render_template('receipt.html')
    
@app.errorhandler(404)
def unknown(err):
    return '404 : NOT FOUND!'

if __name__=="__main__":
    app.run(debug=True)