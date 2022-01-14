from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://chkevers:Kokomo007&@flask-db.cfc0xigg1q9j.eu-west-3.rds.amazonaws.com:5432/ebdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# For Testing purpose --> creating new table
class Cars(db.Model):
    __table__name = 'cars'
    __table_args__ = {"schema": "webapp_dev"}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    model = db.Column(db.String())
    doors = db.Column(db.Integer())

    def __init__(self, name, model, doors) -> None:
        
        self.name = name
        self.model = model
        self.doors = doors

    def __repr__(self) -> str:
        return f"<Car {self.name}>"

row = Cars.query.all()
print(row)

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


