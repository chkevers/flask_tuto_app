from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello():
    welcome = 'Welcome to this flask app'
    return render_template('index.html', welcome=welcome)


@app.route('/geomap')
def geomap():
    # item = 'Test for jinja'
    return render_template('geomap.html', item='Test')



if __name__=="__main__":
    app.run(debug=True)   


