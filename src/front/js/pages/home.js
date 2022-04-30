import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Circuitcard } from "../component/circuitcard";


export const Home = () => {
  const { store, actions } = useContext(Context);
 

  return (
    <div>
      <div className="jumbocont">
        <div className="jumbotron container-fluid py-5 d-flex">
          <div className="h1cont">
            <h1 className="hello alert alert-info">Hello Rider!</h1>
            <p className="jumbop alert alert-info">
              Welcome to rexrunner, a website for bikers who want to do a few
              rounds on the circuit with an incredible motorcycle.
            </p>
            
          </div>
          <img
            className="homeimg"
            src="https://as01.epimg.net/motor/imagenes/2020/02/23/motociclismo/1582477411_526410_1582477923_noticia_normal_recorte1.jpg"
            alt="Mountain"
          />
        </div>
        
      </div>
      <div className="container mx-auto">  
      <div classname=""> 
      <Circuitcard/>
</div>   
      </div> 
    
    </div>
  );
};
