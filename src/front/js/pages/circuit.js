import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

import "../../styles/home.css";

export const Circuit = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    actions.getcircuitbyid(id);
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
        <div class=" row row-cols-2 row-cols-md-3 g-4">
          <div class="motocards col">
            <div class=" card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IrChVwi7gszY-N7_Mej46mAcAptyUXmGmQ&usqp=CAU"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title"> Honda CBR1000RR SR</h5>
                <p class="card-text">
                  Excellent track performance, very reliable HONDA is HONDA...
                </p>
                <span>
                  <strong>850$</strong>
                </span>
              </div>
              <div className="d-flex justify-content-center">
                <button type="button" class="motobut btn btn-secondary">
                  RESERVE
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvr_XfTOTxC3DsXsQRE6w2p5p5RNWMP_fp1w&usqp=CAU"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title"> Kawasaki zx10RR</h5>
                <p class="card-text">Moto super divertida</p>
                <span>
                  <strong>600$</strong>
                </span>
              </div>
              <div className="d-flex justify-content-center">
                <button type="button" class="motobut btn btn-secondary">
                  RESERVE
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoSLxgSbU-vZ4ShGanF_ExWp3MZUQ4TPwyQ&usqp=CAU"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title"> SUZUKI GSX1000RR</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <span>
                  <strong>550$</strong>
                </span>
              </div>
              <div className="d-flex justify-content-center">
                <button type="button" class="motobut btn btn-secondary">
                  RESERVE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class=" circcard row row-cols-1 row-cols-md-3 g-4 mt-3">
          <div class="col">
            <div class="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTykjKzdTXH85eFSuykU3BrWr7B7a6nqqhbuw&usqp=CAU"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">HONDA CBR1000RR </h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <span>
                  <strong>800$</strong>
                </span>
              </div>
              <div className="d-flex justify-content-center">
                <button type="button" class="motobut btn btn-secondary">
                  RESERVE
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-saIlUD7FNxX31Uk8niO-VxdTIE4UptJZbQ&usqp=CAU"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">KAWASAKI ZX10 RR</h5>
                <p class="card-text">This is a short card.</p>
                <span>
                  <strong>300$</strong>
                </span>
              </div>{" "}
              <div className="d-flex justify-content-center">
                <button type="button" class="motobut btn btn-secondary">
                  RESERVE
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJPZuA5AypY3vNPDqUfJBxtz_FBDlsLpDYg&usqp=CAU"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <span>
                  <strong>550$</strong>
                </span>
              </div>
              <div className="d-flex justify-content-center">
                <button type="button" class="motobut btn btn-secondary">
                  RESERVE
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-BUetOJOcQAgpr-o82M2HSQlkjFlMHBPZA&usqp=CAU"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">YAMAHA R1</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <span>
                  <strong>575$</strong>
                </span>
              </div>
              <div className="d-flex justify-content-center">
                <button type="button" class="motobut btn btn-secondary">
                  RESERVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
