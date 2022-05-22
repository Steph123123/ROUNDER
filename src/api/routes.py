"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Circuito, Moto
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


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

@api.route("/login" , methods=["POST"])
def handle_login():
    body=request.get_json()
    email=body["email"]
    password=body["password"]

    user=User.query.filter_by (email=email, password=password).first

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token) 


@api.route("/circuit/<int:id>", methods = ["GET"])
def getcircuit(id):
    circuito = Circuito.query.filter_by(id=id).first()
    circuito_id = Circuito.serialize(circuito)   
    return jsonify(circuito_id), 200 
    
        
           
        
   
    
@api.route("/circuit", methods = ["GET"])
def getall():
    circuito = Circuito.query.all()
    allcircuits = list(map(lambda circuito: circuito.serialize(),circuito))
    return jsonify(allcircuits)
    
@api.route("/circuitmoto/<int:circuito_id>", methods = ["GET"])
def getmotobycircuit(circuito_id):
    moto = Moto.query.filter_by(circuito_id= circuito_id)
    motobycircuit = list(map(lambda moto: moto.serialize(),moto))

    return jsonify(motobycircuit), 200 


   
@api.route("/moto/<int:id>", methods = ["GET"])
def getmoto(id):
    moto = Moto.query.filter_by(id=id).first()
    moto_id = Moto.serialize(moto)   
    return jsonify(moto_id), 200 

    
@api.route("/profileimg" , methods=["POST"])
def profileimg():
    image = request.files['File']
    if image is None:
        return jsonify({"msg": "Error to get image"}), 400

    cloudinary.uploader.upload(image)
    profileimg= upload_result["secure_url"]
    uploadimg = User(profileimg = profileimg)
    db.session.add(uploadimg)
    db.session.commit()

    return jsonify({"msg":"Usuario creado! Ahora, inicia sesión."}), 200

   

    

