import React, { useContext,useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";


export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email,setEmail] =useState("");
  const [password, setPassword] = useState("");
  console.log(store.isLoggedIn)

  return (
    <div className="login text-center justify-content-center">
      <h1>LOGIN</h1>
      
	  
      <div className=" d-flex justify-content-center mt-5">
        <form className="imputs">
          <div class=" row g-3 align-items-center ">
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">
              <strong>Email</strong>
              </label>
            </div>
            <div class="col-auto">
              <input
			  size= "33"
                type="email"
                id="exampleInputEmail1"
                className="form-control ms-4"
                aria-describedby="emailHelp"
				value = {email}
				onChange = {(e)=> setEmail(e.target.value)}
              />
            </div>
            <div class="col-auto">
              
            </div>
          </div>

          <div class="row g-3 align-items-center mt-3">
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">
              <strong>Password</strong>
              </label>
            </div>
            <div class="col-auto">
              <input
			    size= "35"
                type="password"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
				value = {password}
				onChange = {(e)=> setPassword(e.target.value)}
              />
            </div>
            <div class="col-auto">
              <span id="passwordHelpInline" class="helpinline form-text">
                Must be 8-20 characters long.
              </span>
            </div>
          </div>

		  <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me" className="mt-5"/> Remember me
      </label>
    </div>


          <button type="submit" className="submitlog btn btn-primary mt-5 mb-5" onClick={(e)=> {e.preventDefault(); actions.login(email,password)}}>
            <strong>Submit</strong>
          </button>
        </form>
      </div>
     
    </div>
  );
};
