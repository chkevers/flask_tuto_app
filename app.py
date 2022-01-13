from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home_page():
    welcome = 'Welcome to this flask app'
    return render_template('index.html', welcome=welcome)


@app.route('/geomap')
def geomap_page():
    items = [
        {"title": "Treasure Island", "author": "R.L Stevenson", "note": 2.5},
        {"title": "The Alchemist", "author": "Paulo Coelho", "note": 4.1},
        {"title": "To Kill a Mockingbird", "author": "Harper Lee", "note": 3.5},
        {"title": "The Da Vinci Code", "author": "Dan Brown", "note": 3.7},
        {"title": "The Book Thief", "author": "Markus Zusak", "note": 4.2},
    ]
    return render_template('geomap.html', items=items)



if __name__=="__main__":
    app.run(debug=True)   


