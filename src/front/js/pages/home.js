import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="jumbocont">
		<div className="jumbotron container-fluid py-5 d-flex">
			
			<div className="h1cont">
			<h1 className="hello alert alert-info">Hello Rider!</h1>
			<p className="jumbop alert alert-info">Welcome to rexrunner, a website for bikers who want to do a few rounds on the circuit with an incredible motorcycle.</p>
            <div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>

			</div>
			   <img  className="homeimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ud6m4nxvUjYV63CTBsAqdwGntoFV9ElSNA&usqp=CAU" alt="Mountain"/>
		    </div>
			<div className="searcher row">
			<select class="campo form-select form-select-lg mb-3" aria-label=".form-select-lg example">
 				 <option selected>CIRCUITO</option>
  				 <option value="1">Montmelo</option>
 				 <option value="2">Jarama</option>
  				 <option value="3">Alcarrás</option>
				 <option value="4">Jerez</option>
				 <option value="5">Navarra</option>
				 <option value="6">Motorland</option>
				 <option value="7">Kotar</option>
				 <option value="8">Almería</option>
				 <option value="9">Castellolí</option>
				 <option value="10">Ricardo Tormo</option>
				 <option value="11">Calafat</option>
				 <option value="12">Albacete</option>
				   
            </select>
            </div>
        </div>

		<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://www.todocircuito.com/circuito/circuito-de-barcelona-catalunya/avatar.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Montmeló</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://www.todocircuito.com/circuito/circuito-del-jarama/avatar.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Jarama</h5>
        <p class="card-text">This is a short card.</p>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://www.todocircuito.com/circuito/circuito-de-almeria/avatar.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Almería</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://www.todocircuito.com/circuito/circuito-de-kotarr/avatar.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Kotar</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://www.todocircuito.com/circuito/circuito-de-jerez/avatar.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Jerez</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://www.todocircuito.com/circuito/circuito-de-alcarras/avatar.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Alcarrás</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://www.todocircuito.com/circuito/circuito-de-navarra/avatar.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Navarra</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://www.todocircuito.com/circuito/circuito-parcmotor-castelloli/avatar.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Castellolí</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://www.todocircuito.com/circuito/circuito-de-albacete/avatar.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Albacete</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://www.todocircuito.com/circuito/circuito-de-valencia-ricardo-tormo/avatar.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Ricardo Tormo</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://www.todocircuito.com/circuito/circuito-de-calafat/avatar.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Calafat</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://www.todocircuito.com/circuito/circuito-motorland-aragon/avatar.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Motorland</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>



		</div>
		 
		
	);
};
