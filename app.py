from flask import Flask, render_template
import json
import random

app = Flask(__name__)
categories = []
die = ['GO Counter Clockwise','Orange','Blue','Green','Yellow','GO Clockwise']

def import_list():
    with open('categories.txt','r') as f:
        for line in f:
            categories.append(line.strip('\n'))
    return categories

def turn():
    random.shuffle(categories)
    return categories.pop(), random.choice(die)

@app.route('/')
def index():
    categories = import_list()
    categorie, roll = turn()
    return render_template('index.html',category=categorie,roll=roll)

@app.route('/turn')
def take_turn():
    categorie, roll = turn()
    dict = {'category':categorie,'roll':roll}
    data = json.dumps(dict)
    return(data)
