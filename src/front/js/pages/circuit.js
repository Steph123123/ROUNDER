import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Circuit = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="circuitcont">
      <div className=" container text-center justify-content-center">
        <h1>CIRCUIT</h1>

        <div class="circuitcard card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://www.todocircuito.com/circuito/circuito-de-barcelona-catalunya/avatar.jpg"
                className="circuitimg img-fluid rounded-start "
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="circuitinfo card-body">
                <h5 class="card-title">
                  <strong>MONTMELO</strong>
                </h5>
                <p class=" card-text ">
                  El Circuito de Barcelona-Cataluña, también conocido como
                  Circuito de Montmeló o Circuito de Barcelona, es un autódromo
                  situado en las poblaciones de Montmeló y Granollers, en la
                  provincia de Barcelona, comunidad autónoma de Cataluña, España
                </p>
              </div>
            </div>
          </div>
         
        </div> <div class="row row-cols-2 row-cols-md-3 g-4">
            <div class="motocards col">
              <div class=" card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IrChVwi7gszY-N7_Mej46mAcAptyUXmGmQ&usqp=CAU"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
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
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
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
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
      </div>
    </div>
  );
};
