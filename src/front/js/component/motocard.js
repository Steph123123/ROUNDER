import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/home.css";

export const Motocard = (prop) => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
     actions. getmotobyid(prop.moto.id);
   }, []);
  return (
    <div
      class="motocardmodal  modal fade "
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class=" reservecont modal-dialog">
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
            <img src={store.onemoto.image}/>
            <h5>{store.onemoto.modelo}</h5>

            <label className="label "> <strong>Dia</strong></label>
            <input type="datetime-local" className="input ms-3" 
             />

            
            
          </div>
          <div class="modalfooter modal-footer">
          <button type="button" class="modalclose btn " data-bs-dismiss="modal">
              CLOSE
            </button>
            <button type="button" class="modalreserve btn btn-primary">
              RESERVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Motocard.propTypes = {
  moto: PropTypes.object,
};
