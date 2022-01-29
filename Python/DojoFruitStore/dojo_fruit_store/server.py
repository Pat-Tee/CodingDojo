from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = '91^64.3[4 42'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/show')
def show():
    
    return render_template("checkout.html")#, itemTotal_template=session['itemTotal'],
                            #strawberries_template=session['strawberries'], raspberries_template=session['raspberries'], apples_template=session['apples'],
                            #user_firstname_template=session['user_firstname'], user_lastname_template=session['user_lastname'], 
                            #userID_template=session['userID']

@app.route('/checkout', methods=['POST'])
def checkout():
    userForm = request.form;
    print(request.form)
    
    session['strawberries']=int(userForm['strawberry'])
    session['raspberries']=int(userForm['raspberry'])
    session['apples']=int(userForm['apple'])
    session['itemTotal'] = session['strawberries'] + session['raspberries'] + session['apples']
    session['user_firstname']=userForm['first_name']
    session['user_lastname']=userForm['last_name']
    session['userID']=userForm['student_id']
    
    print('Charging',session['user_firstname'],session['user_lastname'],'for', session['itemTotal'], 'fruits.')

    return redirect('/show')
    # return render_template("checkout.html", itemTotal=itemTotal,
    #                         strawberries=strawberries, raspberries=raspberries, apples=apples,
    #                         user_firstname=user_firstname, user_lastname=user_lastname, userID=userID)

@app.route('/fruits')
def fruits():
    return render_template("fruits.html")

if __name__=="__main__":
    app.run(debug=True)