import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Aboutus = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
    <div className="profcont container text-center mt-5">
      <div class="mt-4 p-5 bg-primary text-white rounded">
        <h1>Jumbotron Example</h1>
        <p>Lorem ipsum...</p>
      </div>
    </div>
    </div>
  );
};
