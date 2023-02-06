import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import { Maps } from "../component/maps";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "../../styles/home.css";

export const Circuit = () => {
  const { store, actions } = useContext(Context);
  const { circuitid } = useParams();
  const [moto, setMoto] = useState({});
  const [reserve, setReserve] = useState({});
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    actions.getcircuitbyid(circuitid);
    actions.getmotobycircuit(circuitid);
  }, []);
  // fetch para el modal de la moto
  const getmotobyid = (id) => {
    fetch(store.BACKEND_URL + "/api/moto/" + id)
      .then((response) => response.json())
      .then((data) => setMoto(data));
  };

  return (
    <div className="circuitcont mt-3">
      <div className=" container text-center justify-content-center">
        <div class="circuitcard card mb-3">
          <div class="  d-flex row ">
            <img
              src={store.onecircuit.image}
              className="circuitimg img-fluid rounded-start  col-4 p-5 h-100"
              alt="..."
            />

            <div class="  col-8">
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
      <div className="d-flex ">
        {store.circuitmoto.map((circuitval) => (
          <div
            key={circuitval.id}
            className="motocard card mb-3 m-auto"
            style={{ maxWidth: "540px", maxHeight: "540px" }}
          >
            <div className="row g-0">
              <div className="motoimg col-md-4 d-flex">
                <img
                  src={circuitval.image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{circuitval.marca}</h5>
                  <p className="card-text">{circuitval.modelo}</p>
                  <p className="card-text">{circuitval.cilindrada}</p>
                  <p className="card-text">
                    <small className="text-muted">Aviable</small>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  getmotobyid(circuitval.id);
                }}
                className="container btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                More...
              </button>

              <div
                class="motocardmodal  modal fade "
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class=" reservecont modal-dialog modal-xl">
                  <div class="reservemod modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Ready for a round?
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modalbody modal-body">
                      <div className="d-flex mb-5 ">
                        <img
                          src={moto.image}
                          className=" img-fluid h-50 w-50 "
                        />
                        <div className="ms-5">
                          <h1> {moto.marca}</h1>
                          <h3>{moto.modelo}</h3>
                          <p>{moto.description}</p>
                        </div>
                      </div>

                      <div className="calendar">
                        <Calendar
                          onChange={(e) => {
                            setReserve({ ...reserve, date: e });
                          }}
                          value={date}
                        />
                      </div>
                    </div>
                    <div class="modalfooter modal-footer">
                      <button
                        type="button"
                        class="modalclose btn "
                        data-bs-dismiss="modal"
                      >
                        <strong>CLOSE</strong>
                      </button>
                      <button
                        type="button"
                        class="modalreserve btn btn-primary"
                      >
                        <strong>RESERVE</strong>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
