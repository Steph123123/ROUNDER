import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import { Motocard } from "../component/motocard";
import {Maps} from "../component/maps"

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
                <p class=" card-text ">{store.onecircuit.description}</p>
                <div className="d-flex justify-content-center">
                  <div className="d-flex justify-content-center"> </div>
                  <span>
                   <Maps place={store.onecircuit.place} />
                  </span>
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
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  actions.getmotobyid(circuitval.id);
                }}
                className="container btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                More...
              </button>

              <Motocard key={store.onemoto.id} marca={store.onemoto.marca} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
