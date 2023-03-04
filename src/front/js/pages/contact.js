import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Contact = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="jumbocontact  container-fluid  mt-5">
        <h1 className="contacth1  container-fluid text-center ">Contact Us</h1>
        <div class=" rounded">
          <div className="cont container-fluid mb-5 mt-5 d-flex justify-content-center">
            <div className="ppp p-3 m-auto col-lg-4  .col-sm-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-phone"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#00bfd8"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              <span> 661563757</span>
            </div>
            <div className="ppp p-3 m-auto col-lg-4 .col-sm-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                stroke="#00bfd8"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span> steph13am@gmail.com</span>
            </div>
            <div className="ppp p-3 m-auto col-lg-4  .col-sm-12 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-map-pin"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#00bfd8"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="11" r="3" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              <span>Barcelona, Spain</span>
            </div>
          </div>
          <div className="contactimg d-flex justify-content-center">
            <img
              className="img-fluid pb-5"
              src="https://isaydata.com/wp-content/uploads/2021/08/persona-dando-mantenimiento-a-su-moto-780x437.jpg "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
