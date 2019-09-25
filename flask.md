Check for python path:
```
type -a python
which python
ls -l /usr/bin/python
```

Install python 3:
```
brew install python@2
brew upgrade python3
```

Python 3 comes bundled with the venv module to create virtual environment.

Create a project folder and a venv folder within:
```
mkdir myproject
cd myproject
python3 -m venv venv
```

Activate the environment:
```
. venv/bin/activate
```

Within the activated environment, install Flask:
```
pip install Flask
```

A minimal Flask application looks something like below, save it as `hello.py`:
```
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'
```

Exporting the `FLASK_APP` environment variable to tell terminal the application to work with:
```
export FLASK_APP=hello.py
```

Exporting the `FLASK_ENV` environment variable to enable all development features.
1) activates the debugger.
2) activates the automatic reloader.
3) enables the debug mode on the Flask application (a user of the application can execute arbitrary Python code on your computer).
```
export FLASK_ENV=development
```

Use the flask command to run the application:
```
flask run
```

Equivalent to (python's `-m` switch with Flask):
```
python -m flask run
```

Make the server publicly available (tells the operating system to listen on all public IPs):
```
flask run --host=0.0.0.0
```

Head over to `http://127.0.0.1:5000`, and should see hello world greetings.

---

Use the `route()` decorator to bind a function to a URL.
```
@pp.route('/')
def inde():
    return 'Index Page'
    
@app.route('/hello')
def hello():
    return 'Hello, World'
```

Add variable sections to a URL and the function receives the variables as keyword arguments,
Optionally, can use a converter to specify the type of the argument:
```
@app.route('/user/<username>')
def show_user_profile(username):
    return 'User %s' % escape(username)
    
@app.route('/post/<int:post_id>')
def show_post(post_id):
    return 'Post %d' % post_id
    
@app.route('/path/<path:subpath>')
def show_subpath(subpath):
    return 'Subpath %s' % escape(subpath)
```

Converter types:
1) string: accepts any text without a slash
2) int: accepts positive integers
3) float: accepts positive floating point values
4) path: like string but also accpets slashes
5) uuid: accepts UUID strings

The following two rules differ in their use of a trailing slash.
```
@app.route('/projects/')
def projects():
    return 'The project page'

@app.route('/about')
def about():
    return 'The about page'
```
1) The canonical URL for the projects endpoint has a trailing slash (similar to a folder in a file system).
2) The canonical URL for the about endpoint does not have a trailing slash (similar to the pathname of a file).
3) Access the projects URL without a trailing slash, Flask redirects to the canonical URL with the trailing slash.
4) Access the about URL with a trailing slash, produces a 404 "Not Found" error (helps keep URLs unique for these resources, helps search engines avoid indexing the same page twice). 

Use the methods argument of the `route()` decorator to handle different HTTP methods:
```
from flask import request
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return do_the_login()
    else:
        return show_the_login_form()
```
1) Flask automatically adds support for the `HEAD` method if `GET` is present.
2) `OPTIONS` is automatically implemented.

---






