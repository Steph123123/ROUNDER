"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Circuito, Moto,Reserve
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import  cloudinary
import cloudinary.uploader


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
    phone=body["phone"]
    adress=body["adress"]
    user=User.query.filter_by(email=email).first()
    if not user: 
        newuser=User(email=email, password=password, name=name,lastname=lastname, dni=dni, username=username, profile_picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrn7U0EtnXIezoFaP1288diyBg1uPZsSTy_w&usqp=CAU", phone=phone, adress=adress)
        db.session.add(newuser)
        db.session.commit()
        return jsonify ({"mensaje" : "Welcome to Rounder!"}),200
    else :
        return jsonify ({"mensaje":"Failure"}), 400

    

   
@api.route("/login" , methods=["POST"])
def handle_login():
    body=request.get_json()
    email=body["email"]
    password=body["password"]

    user=User.query.filter_by (email=email, password=password).first()

    access_token = create_access_token(identity=user.id)
    return jsonify({"access_token":access_token, "logged" : True ,"user":user.serialize()}) 


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



   
@api.route("/profileuser" , methods=["PUT"])
@jwt_required()
def profileuser():
    userid=get_jwt_identity()
    user=User.query.get(userid)
    body_name = request.form.get("name", None)
    if body_name == "" or body_name == None:
        body_name = user.name

    body_username = request.form.get("username", None)
    if body_username == "" or body_username == None:
        body_username = user.username
    
    body_lastname = request.form.get("lastname", None)
    if body_lastname == "" or body_lastname == None:
        body_lastname = user.lastname
    
    body_email = request.form.get("email", None)
    if body_email == "" or body_email == None:
        body_email = user.email
    
    body_password = request.form.get("", None)
    if body_password == "" or body_password == None:
        body_password = user.password

    body_dni = request.form.get("dni", None)
    if body_dni == "" or body_dni == None:
        body_dni= user.dni

    if "profile_picture" in request.files:
        body_profile_picture = cloudinary.uploader.upload(
            request.files['profile_picture'])
        user.profile_picture = body_profile_picture['secure_url']

    else: 
        body_profile_picture= user.profile_picture
    user.name=body_name
    user.lastname=body_lastname
    user.dni=body_dni
    user.email=body_email
    user.password=body_password
    user.username=body_username

    db.session.commit()

    return jsonify({"user":user.serialize(), "msg":"Usuario creado! Ahora, inicia sesión."}), 200

       
@api.route("/verify", methods = ["GET"])
@jwt_required()
def verify():
    user_id=get_jwt_identity()
    user=User.query.get(user_id)
    if user:
        return jsonify({"user":user.serialize(),"logged":True}), 200 
    else:
        return jsonify({"logged":False}), 200 
    

@api.route("/reserve", methods = ["POST"])
@jwt_required()
def reserve(): 
    userid=get_jwt_identity()
    user=User.query.get(userid)
    body_date = request.json.get("date")
    body_moto = request.json.get("moto")
    if body_date and body_moto :
        reserve=Reserve(reservation_date=body_date,user_id=userid,moto_id=body_moto)
        db.session.add(reserve)
        db.session.commit()
        return jsonify(reserve.serialize()),200
    else: 
        return jsonify("Fail"), 400

@api.route("/reserve", methods = ["GET"])
@jwt_required()
def get_reserve():
    user_id=get_jwt_identity()
    reserve=Reserve.query.filter_by(user_id=user_id)
    all_reserve = list(map(lambda reserve: reserve.serialize(),reserve))

    if reserve:
        return jsonify(all_reserve), 200 
    else:
        return jsonify("no hay reservas encontradas"), 400

@api.route("/get_repeat_reserve/<int:reserveid>", methods = ["GET"])
@jwt_required()
def get_repeat_reserve(reserveid):
    reserve=Reserve.query.get(reserveid)

    if reserve:
        return jsonify({"reserve": reserve.serialize()}), 200 
    else:
        return jsonify("no hay reservas encontradas"), 400

@api.route("/delete_reserve/<int:reserveid>", methods = ["DELETE"])
@jwt_required()
def delete_reserve(reserveid):
    reserve=Reserve.query.get(reserveid)
    
    if reserve:
        db.session.delete(reserve)
        db.session.commit()
        return jsonify({"mensaje" : 'Reserva eliminada'}), 200 
    else:
        return jsonify("No hay reservas encontradas"), 400
