"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/register" , methods=["POST"])
def handle_register():
    body=request.get_json()
    email=body["email"]
    password=body["password"]
    name=body["name"]
    lastname=body["lastname"]
    dni=body["dni"]
    username=body["username"]

    user=User(email=email, password=password, name=name,lastname=lastname, dni=dni, username=username)
    db.session.add(user)
    db.session.commit()

    return jsonify ({"mensaje" : "Welcome to Rounder!"}) 

