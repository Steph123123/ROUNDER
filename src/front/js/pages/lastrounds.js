import React, { useContext, useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const LastRounds = () => {
  const { store, actions } = useContext(Context);
  const [date, setDate] = useState(new Date());
  const [reserve, setReserve] = useState({});

  useEffect(() => {
    actions.get_reserve();
    console.log(store.user_reserve);
  }, []);
  return (
    <div className="profcont container text-center mt-5">
      <div class="lastcard card">
        <h5 class="lastrounds card-header">LAST ROUNDS</h5>

        <div class=" d-flex card-body">
          <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-motorbike"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00bfd8"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="5" cy="16" r="3" />
            <circle cx="19" cy="16" r="3" />
            <path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
            <path d="M13 6h2l1.5 3l2 4" />
          </svg>
          {store.user_reserve.map((moto) => {
            console.log(moto);
            return (
              <>
                <p class="card-text ms-5">{moto.moto.marca}</p>
                <button
                  type="button"
                  onClick={() => {
                    actions.get_repeat_reserve(moto.id);
                  }}
                  className="container btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalRepeat"
                >
                  REPEAT
                </button>
                </>
            );
          })}
                <div
                  class="motocardmodal  modal fade "
                  id="exampleModalRepeat"
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
                            src={store.user_repeat_reserve.image}
                            className=" img-fluid h-50 w-50 "
                          />
                          <div className="ms-5">
                            <h1> {store.user_repeat_reserve.marca}</h1>
                            <h3>{store.user_repeat_reserve.modelo}</h3>
                            <p>{store.user_repeat_reserve.description}</p>
                          </div>
                        </div>

                        <div className="calendar">
                          <Calendar
                            onChange={(e) => {
                              setReserve({
                                ...reserve,
                                moto: store.user_repeat_reserve.id,
                                date: e,
                              });
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
                          onClick={() => {
                            actions.reserve(reserve);
                          }}
                        >
                          <strong>RESERVE</strong>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};
