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
    adress = db.Column(db.String(250), nullable=False)
    moto = db.relationship("Moto")
    reserve = db.relationship("Reserve", back_populates="user")
    profile_id = db.Column(db.Integer, db.ForeignKey('profile.id'))
    profile_picture = db.Column(db.String(200))
    phone=db.Column(db.String(80),unique=True)


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
            "phone" : self.phone,
            "img":self.profile_picture,
            "adress":self.adress,

            # do not serialize the password, its a security breach
        }

class Moto(db.Model):
    __tablename__ = 'moto'
    id = db.Column(db.Integer, primary_key=True)
    marca = db.Column(db.String(80), unique=False, nullable=False)
    modelo = db.Column(db.String(80), unique=False, nullable=False)
    cilindrada = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(200), unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    image = db.Column(db.String(1000), unique=False, nullable=False)
    stripe_id= db.Column(db.String(1000), unique=False, nullable=False)
    circuito_id = db.Column(db.Integer, db.ForeignKey('circuito.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    reserve_id = db.Column(db.Integer, db.ForeignKey('reserve.id'))
    reserve = db.relationship("Reserve", back_populates="moto")
    

    def __repr__(self):
        return f'<Moto {self.modelo}>'

    def serialize(self):
        return {
            "id": self.id,
            "image" : self.image,
            "marca": self.marca,
            "modelo" : self.modelo,
            "cilindrada" : self.cilindrada,
            "description" : self.description,
            "price" : self.price
            }



class Circuito(db.Model):
    __tablename__ = 'circuito'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    place = db.Column(db.String(200), unique=False, nullable=False)
    Moto = db.relationship("Moto")
    description = db.Column(db.String(1000), unique=True, nullable=False)
    image = db.Column(db.String(200), unique=False, nullable=False)
    


    def __repr__(self):
        return f'<Circuito {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name" : self.name,
            "image" : self.image,
            "description" : self.description,
            "place" : self.place,
            
            
            
        }

    
class Reserve(db.Model):
    __tablename__ = 'reserve'
    id = db.Column(db.Integer, primary_key=True)
    reservation_date = db.Column(db.DateTime(timezone=False), unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship("User", back_populates="reserve")
    moto = db.relationship("Moto", back_populates="reserve")

    def serialize(self):
        return {
            "id": self.id,
            "reservation_date" : self.reservarion_date,
            "user_id" : self.user_id,
            "user" : self.user,
            "moto" : self.moto


        }

    

class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    profileimg = db.Column(db.String(1000))
    user = db.relationship('User', backref='profile')
    

    def serialize(self):
        return {
            "id": self.id,
            "profileimg" : self.profileimg   
        }



