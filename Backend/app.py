# app.py
from flask import Flask
from routes.testRoute import test_route  # Import the blueprint

app = Flask(__name__)
app.register_blueprint(test_route)  # Register the blueprint



if __name__ == '__main__':
    app.run()
