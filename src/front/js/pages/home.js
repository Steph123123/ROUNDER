import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Lottie from "lottie-react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import "../../styles/home.css";
import { Circuitcard } from "../component/circuitcard";
import { Maps } from "../component/maps";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="">
      <div className="jumbocont ">
        <div className="container">
          <div className="jumbotron py-5 d-flex row ">
            <div className="jumbotron col w-100 align-self-start">
              <h1 className="hello alert alert-info container-fluid">
                Hello Rider!
              </h1>
              <p className="jumbop alert alert-info ">
                Welcome to rexrunner, a website for bikers who want to do a few
                rounds on Spanish circuits with an incredible motorcycle.
              </p>
            </div>
            <div className=" col-auto align-self-end">
              <img
                width="500px"
                className="img-fluid "
                src="https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2021/04/05/valentino-rossi.jpeg"
              />
            </div>

          </div>
        </div>
      </div>
      <div className="container card-group">
        
          <Circuitcard />
        
      </div>
    </div>
  );
};
