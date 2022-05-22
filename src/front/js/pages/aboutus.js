import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Aboutus = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
    <div className="jumboabout profcont container  mt-5">
      <div class="mt-4 p-5   rounded">
        <h1 className="abouth1 container text-center mt-5">About Rex-Rounder</h1>
        <h2 cassName="aboouth2">Rex-Rounder founder</h2>
        <h3>Stephania Alvarez</h3>
        <p>

I am a veterinarian, getting to know new fields of work where I have found new goals, different ways of working and which have greatly enriched me in the world of programming and web development.

this project like others, was born from my passion for motorcycles and in it I put into practice the knowledge acquired in the academai 4 geeks during these last months

I hope you know the project and that you like it</p>
      </div>
    </div>
    </div>
  );
};
