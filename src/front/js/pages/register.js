import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"; 

import "../../styles/home.css";


export const Register = () => {
	const { store, actions } = useContext(Context);
  const [name,setName] = useState("")
  const [password, setPassword] = useState ("")
  const [lastname, setLastname] = useState ("")
  const [dni, setDni] = useState ("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState ("")

  const input = {
    width: "20rem",
    color: "#5c1ec7",
	backgroundColor: "#1FBCC2"
  };




	return (
		<div className="containerlfuid">
      <div className="registro">
               
            
            <div className="row">
                <div className="col mt-2">
                    <label for="formGroupExampleInput" className="form-label">Name</label>
                    <input type="text" className="form-control" style={input} placeholder="Name" aria-label="First name" name="name" value = {name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col mt-2">
                    <label for="formGroupExampleInput" className="form-label">Last Name</label>
                    <input type="text" className="form-control" style={input} placeholder="Last name" aria-label="Last name" name="lastName" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col mt-2">
                    <label for="formGroupExampleInput" className="form-label"> User Name</label>
                    <input type="text" className="form-control" style={input} placeholder="User Name" aria-label="User Name" name="phonenumber" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="col mt-2">
                    <label for="formGroupExampleInput" className="form-label">DNI</label>
                    <input type="text" className="form-control" style={input} placeholder="DNI" aria-label="dni" name="dni" value = {dni} onChange={(e) => setDni(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col mt-2">
                    <label for="formGroupExampleInput" className="form-label">e-mail</label>
                    <input type="email" className="form-control"style={input}  placeholder="e-mail" aria-label="email" name="email" value = {email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col mt-2">
                    <label for="formGroupExampleInput" className="form-label">Password</label>
                    <input type="password" className="form-control" style={input} placeholder="Password" aria-label="Password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <button type="button" className="btn btn-primary mt-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => {
                actions.register(email, password, name, lastname, dni, username )

            }}>Send</button>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Gracias por registrarte!</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Thanks for sing up, lets log in and take a round! 
                        </div>
                        <div class="modal-footer">
                            <Link to="/login">
                                <button type="button" class="btn btn-primary ">Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
			</div>
		</div>
    
	);
};