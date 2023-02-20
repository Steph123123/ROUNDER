import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Circuitcard = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getcircuit();
  }, []);
  return (
    <div className=" circards row d-flex justify-content-center ">
      {store.circuit.map((circuitval) => (
        <div
          key={circuitval.id}
          className="cardcirc card mb-3"
          style={{ maxWidth: "540px" }}
        >
          <div className="row g-0">
            <div className="circard col-md-4">
              <img
                src={circuitval.image}
                className=" img-fluid rounded-start mt-3 "
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title h3">{circuitval.name}</h5>
                <p className="card-text">{circuitval.description}</p>
              </div>
            </div>
            <Link to={"/circuit/" + circuitval.id}>
              <button type="button" className="morebtn btn btn-dark">
                More...
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
