from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=False)
    lastname = db.Column(db.String(80), unique=False, nullable=False)
    dni = db.Column(db.String(10), unique=True, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name" : self.name,
            "lastname" : self.lastname,
            "dni" : self.dni,
            "username" : self.username,

            # do not serialize the password, its a security breach
        }

class Moto(db.Model):
    __tablename__ = 'moto'
    id = db.Column(db.Integer, primary_key=True)
    marca = db.Column(db.String(80), unique=False, nullable=False)
    modelo = db.Column(db.String(80), unique=False, nullable=False)
    cilindrada = db.Column(db.String(80), unique=False, nullable=False)
    circuito_id = db.Column(db.Integer, db.ForeignKey('circuito.id'))

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "marca": self.marca,
            "modelo" : self.modelo,
            "cilindrada" : self.cilindrada,
            }



class Circuito(db.Model):
    __tablename__ = 'circuito'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    place = db.Column(db.String(200), unique=False, nullable=False)
    Moto = db.relationship("Moto")


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            
        }

    
