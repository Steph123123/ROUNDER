import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Profile = () => {
	const { store, actions } = useContext(Context);
  const [user, setUser] = useState();
	const imgProfile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
     setUser({ ...user, profilr_picture: e.target.files[0] })

    }
  };

	return (
		<div className="profcont container text-center mt-5">
			
			
			<div class="card mb-3 w-100 bg-secondary" >
  <div class=" imgprof row g-0">
    <div class="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrn7U0EtnXIezoFaP1288diyBg1uPZsSTy_w&usqp=CAU" class=" userimg img-fluid  " alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="username card-title">USERNAME</h5>
        <form>
        <div class="input-group">
  <input type="file" className=" editbtd form-control" onChange={imgProfile } id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
  <button class="btn btn-outline-secondary" onClick={()=>profileimage()} type="button" id="inputGroupFileAddon04">Button</button>
</div>
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
	
    
    <button type="" class="editbtn btn " onClick={()=>{actions.editUser(user)}}><strong>EDIT</strong></button>
  </fieldset>
</form>
      </div>
    </div>
  </div>
</div>


<div class="lastcard card">
  <h5 class="lastrounds card-header">LAST ROUNDS</h5>
  <div class=" d-flex card-body">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-motorbike" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="16" r="3" />
  <circle cx="19" cy="16" r="3" />
  <path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
  <path d="M13 6h2l1.5 3l2 4" />
</svg>
    <p class="card-text ms-5">CIRCUIT</p>
    <a href="#" class="repeatbtn btn  ms-5">REPEAT</a>
  </div>

  <div class=" d-flex card-body">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-motorbike" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="16" r="3" />
  <circle cx="19" cy="16" r="3" />
  <path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
  <path d="M13 6h2l1.5 3l2 4" />
</svg>
    <p class="card-text ms-5">CIRCUIT</p>
    <a href="#" class="repeatbtn btn  ms-5">REPEAT</a>
  </div>

  <div class=" d-flex card-body">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-motorbike" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="16" r="3" />
  <circle cx="19" cy="16" r="3" />
  <path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
  <path d="M13 6h2l1.5 3l2 4" />
</svg>
    <p class="card-text ms-5">CIRCUIT</p>
    <a href="#" class="repeatbtn btn  ms-5">REPEAT</a>
  </div>

  
</div>
			
			













			
			
		</div>
	);
};
