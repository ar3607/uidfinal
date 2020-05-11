# -*- coding: utf-8 -*-
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify


app = Flask(__name__)

ppc_people = []

@app.route('/')
def index(name=None):
    return render_template('index.html')

@app.route('/toppc', methods=['GET', 'POST'])
def toppc():
    global ppc_people

    json_data = request.get_json()

    person = json_data.get("wrong")

    ppc_people.append(person)
    
    return jsonify(ppc_people=ppc_people)

@app.route('/2')
def page2(name=None):
    return render_template('page2.html')

@app.route('/3')
def page3(name=None):
    return render_template('page3.html')

@app.route('/4')
def page4(name=None):
    return render_template('page4.html')

@app.route('/5')
def page5(name=None):
    return render_template('page5.html')

@app.route('/6')
def page6(name=None):
    return render_template('page6.html')

@app.route('/7')
def page7(name=None):
    return render_template('page7.html')

@app.route('/8')
def page8(name=None):
    return render_template('page8.html')

@app.route('/9')
def page9(name=None):
    return render_template('page9.html')

@app.route('/10')
def page10(name=None):
    return render_template('page10.html')

@app.route('/selftest')
def selftest(name=None):
    return render_template('selftest.html')

@app.route('/11')
def page11(name=None):
    return render_template('page11.html')

@app.route('/12')
def page12(name=None):
    return render_template('page12.html')

@app.route('/13')
def page13(name=None):
    return render_template('page13.html')

@app.route('/14')
def page14(name=None):
    return render_template('page14.html')

@app.route('/15')
def page15(name=None):
    return render_template('page15.html')

@app.route('/16')
def page16(name=None):
    return render_template('page16.html')

@app.route('/17')
def page17(name=None):
    return render_template('page17.html')

@app.route('/18')
def page18(name=None):
    return render_template('page18.html')

@app.route('/19')
def page19(name=None):
    return render_template('page19.html')

@app.route('/20')
def page20(name=None):
    return render_template('page20.html')

@app.route('/21')
def page21(name=None):
    return render_template('page21.html')

@app.route('/22')
def page22(name=None):
    return render_template('page22.html')

@app.route('/23')
def page23(name=None):
    return render_template('page23.html')

@app.route('/26')
def page26(name=None):
    return render_template('page26.html')

@app.route('/27')
def page27(name=None):
    return render_template('page27.html')

@app.route('/28')
def page28(name=None):
    return render_template('page28.html')

@app.route('/29')
def page29(name=None):
    return render_template('page29.html')

@app.route('/30')
def page30(name=None):
    return render_template('page30.html')

@app.route('/31')
def page31(name=None):
    return render_template('page31.html')

@app.route('/32')
def page32(name=None):
    return render_template('page32.html')

@app.route('/33')
def page33(name=None):
    return render_template('page33.html')

@app.route('/34')
def page34(name=None):
    return render_template('page34.html')




if __name__ == '__main__':
    app.run(debug = True)














