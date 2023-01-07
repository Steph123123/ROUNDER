import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


import "../../styles/home.css";

export const Aboutus = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="jumboabout profcont container  mt-5">
        <div class="mt-4 p-5   rounded">
          <h1 className="abouth1 container text-center mt-5">
            About REX-ROUNDER
          </h1>
         
          <div className="d-flex">
             <video className="videoaout"
            src="https://res.cloudinary.com/steph13am/video/upload/v1673101162/WhatsApp_Video_2023-01-07_at_14.56.37_tmzi48.mp4"
            controls
          >
            {" "}
          </video>
            <p className="pabout">
              I am Stephania Alvarez, a veterinarian getting into new work fields where I
              have found new goals, different ways of working and which have
              greatly enriched me in the world of programming and web
              development. This project <strong>like others</strong>, was born from my passion
              for motorcycles and in it I put into practice the knowledge
              acquired at the 4 Geeks Academy during these last months I hope you like it and enjoy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
