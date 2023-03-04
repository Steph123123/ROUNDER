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
    <>
      {store.circuit.map((circuitval) => (
        <div
          key={circuitval.id}
          className="cardcirc m-4 p-4 card d-flex justify-content-center container"
          style={{ width: "18rem" }}
        >
          <div className="row d-flex justify-content-center">
            <div className="circard col-auto align-self-start ">
              <img
                src={circuitval.image}
                className=" img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-auto align-self-end">
              <div className="card-body">
                <h5 className="card-title">{circuitval.name}</h5>
              </div>
              <div className="d-flex justify-content-center">
                <Link to={"/circuit/" + circuitval.id} className="m-auto">
                  <button type="button" className="morebtn btn btn-dark">
                    More...
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
