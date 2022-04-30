import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import { Motocard} from "../component/motocard";

import "../../styles/home.css";

export const Circuit = () => {
  const { store, actions } = useContext(Context);
  const { circuitid } = useParams();
  useEffect(() => {
    actions.getcircuitbyid(circuitid);
    actions.getmotobycircuit(circuitid);
  }, []);
  return (
    <div className="circuitcont mt-3">
      <div className=" container text-center justify-content-center">
        <div class="circuitcard card mb-3">
          <div class=" circinf row ">
            <div class="col-md-4 ">
              <img
                src={store.onecircuit.image}
                className="circuitimg img-fluid rounded-start "
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="circuitinfo card-body">
                <h5 class="card-title">
                  <strong>{store.onecircuit.name}</strong>
                </h5>
                <p class=" card-text ">
                {store.onecircuit.description}
                </p>
                <div className="d-flex justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-map-pin"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#009988"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="11" r="3" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                  <div className="d-flex justify-content-center"> </div>
                  <span>{store.onecircuit.place}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      {store.circuitmoto.map((circuitval) => (
        <div
          key={circuitval.id}
          className="card mb-3"
          style={{ maxWidth: "540px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={circuitval.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{circuitval.name}</h5>
                <p className="card-text">{circuitval.description}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            
              <button
                type="button"
                onClick={actions.getmotobyid(circuitval.id)}
                className="d-flex justify-content-center btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal"
              >
                Ver más...
              </button>
            
            <Motocard key={store.onemoto.id }marca={store.onemoto.marca}/>

          </div>
        </div>
      ))}
    </div>
    </div>
  );
};




