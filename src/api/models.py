from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
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
    id = db.Column(db.Integer, primary_key=True)
    marca = db.Column(db.String(80), unique=False, nullable=False)
    modelo = db.Column(db.String(80), unique=False, nullable=False)
    cilindrada = db.Column(db.String(80), unique=False, nullable=False)

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
    id = db.Column(db.Integer, primary_key=True)
    montmelo = db.Column(db.String(80), unique=False, nullable=False)
    alcarras = db.Column(db.String(80), unique=False, nullable=False)
    cheste = db.Column(db.String(80), unique=False, nullable=False)
    castelloli = db.Column(db.String(80), unique=False, nullable=False)
    motorland = db.Column(db.String(80), unique=False, nullable=False)
    navarra = db.Column(db.String(80), unique=False, nullable=False)
    albacete = db.Column(db.String(80), unique=False, nullable=False)
    jerez = db.Column(db.String(80), unique=False, nullable=False)
    jarama = db.Column(db.String(80), unique=False, nullable=False)
    montblac = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "montmelo": self.montmelo,
            "alcarras" : self.alcarras,
            "castelloli" : self.castelloli,
            "cheste" : self.cheste,
            "motorland" : self.motorland,
            "navarra" : self.navarra,
            "albacete" : self.albacete,
            "jerez" : self.jerez,
            "jarama" : self.jarama,
            "montblac" : self.montblanc,
        }

    
