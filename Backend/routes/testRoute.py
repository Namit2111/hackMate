# routes/home.py
from flask import Blueprint, jsonify
import random

test_route = Blueprint('home', __name__)

@test_route.route('/random-number', methods=['GET'])
def random_number():
    number = random.randint(1, 100)  # Generate a random number between 1 and 100
    return jsonify(number=number)
