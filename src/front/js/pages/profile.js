import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="profcont container text-center mt-5">
			<h1>PROFILE</h1>
			
			<div class="card mb-3 w-100 bg-secondary" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU" class=" userimg img-fluid  " alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">USERNAME</h5>
        <form>
  <fieldset disabled>
    
    <div class="mb-3 ">
      <input type="text" id="disabledTextInput" class="form-control" placeholder="NAME"/>
    </div>
	<div class="mb-3">
      <input type="text" id="disabledTextInput" class="form-control" placeholder="LAST NAME"/>
    </div>
	<div class="mb-3">
      <input type="text" id="disabledTextInput" class="form-control" placeholder="EMAIL"/>
    </div>
	<div class="mb-3">
      <input type="text" id="disabledTextInput" class="form-control" placeholder="PHONE NUMBER"/>
    </div>
	<div class="mb-3">
      <input type="text" id="disabledTextInput" class="form-control" placeholder="DNI"/>
    </div>
	<div class="mb-3">
      <input type="text" id="disabledTextInput" class="form-control" placeholder="BIRTHDATE"/>
    </div>
	
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
      </div>
    </div>
  </div>
</div>


<div class="card">
  <h5 class="card-header">LAST ROUNDS</h5>
  <div class=" d-flex card-body">
    <h5 class="card-title">MOTO</h5>
    <p class="card-text ms-5">CIRCUITO</p>
    <a href="#" class="btn btn-primary ms-5">REPEAT</a>
  </div>

  <div class=" d-flex card-body">
    <h5 class="card-title">MOTO</h5>
    <p class="card-text ms-5">CIRCUITO</p>
    <a href="#" class="btn btn-primary ms-5">REPEAT</a>
  </div>

  <div class=" d-flex card-body">
    <h5 class="card-title">MOTO</h5>
    <p class="card-text ms-5">CIRCUITO</p>
    <a href="#" class="btn btn-primary ms-5">REPEAT</a>
  </div>

  
</div>
			
			













			
			
		</div>
	);
};
