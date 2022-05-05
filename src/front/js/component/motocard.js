import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/home.css";

export const Motocard = (prop) => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  //useEffect(() => {
  //   actions. getmotobyid(id);
  // }, []);
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label className="label">Dia</label>
            <input type="datetime-local" className="input" />
            
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              CLOSE
            </button>
            <button type="button" class="btn btn-primary">
              RESERVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Motocard.propTypes = {
  marca: PropTypes.string,
};
