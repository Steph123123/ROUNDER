import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState();
  const imgProfile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setUser({ ...user, profile_picture: e.target.files[0] });
    }
  };

  return (
    <div className="profcont container text-center mt-5">
      <div className="card mb-3 w-100 bg-secondary">
        <div className=" imgprof row g-0">
          <div className="col-md-4  align-middle m-auto">
            <img
              src={store.user.img}
              className="rounded-circle "
              width="300" height="300"
              
              alt="..."
            />
            
          </div>
          <div className="col-md-8 ">
            <div className="card-body">
              <h5 className="username card-title">{store.user.name}</h5>

              <div className="input-group w-50 mt-5  m-auto">
                <input
                  type="file"
                  className=" editbtd form-control w-50 "
                  onChange={imgProfile}
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                />
                <button
                  class="btn btn-outline-secondary"
                  onClick={() => profileimage()}
                  type="button"
                  id="inputGroupFileAddon04"
                >
                  Button
                </button>
              </div>

              <div className="mb-2 d-flex justify-content-center">
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control mt-3 mb-3 w-50"
                  placeholder="NAME"
                  defaultValue={store.user.name}
                  onChange= {(e) => {setUser({ ...user,name: e.target.value })}}
                />
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control w-50"
                  placeholder="LAST NAME"
                  defaultValue={store.user.lastname}
                />
              </div>
              <div class="mb-3 d-flex justify-content-center">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control w-50"
                  placeholder="EMAIL"
                  defaultValue={store.user.email}
                />
              </div>
              <div class="mb-3 d-flex justify-content-center">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control w-50"
                  placeholder="PHONE NUMBER"
                  defaultValue={store.user.phone}
                />
              </div>
              <div class="mb-3 d-flex justify-content-center">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control w-50"
                  placeholder="DNI"
                  defaultValue={store.user.dni}
                />
              </div>
              <div class="mb-3 d-flex justify-content-center">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control w-50"
                  placeholder="username"
                  defaultValue={store.user.username}
                />
              </div>

              <button
                type="button"
                class="editbtn btn btn-info"
                onClick={() => {
                  actions.editUser(user);
                }}
              >
                <strong>SAVE CHANGES</strong>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="lastcard card">
        <h5 class="lastrounds card-header">LAST ROUNDS</h5>
        <div class=" d-flex card-body">
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
          <p class="card-text ms-5">CIRCUIT</p>
          <a href="#" class="repeatbtn btn  ms-5">
            REPEAT
          </a>
        </div>

        <div class=" d-flex card-body">
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
          <p class="card-text ms-5">CIRCUIT</p>
          <a href="#" class="repeatbtn btn  ms-5">
            REPEAT
          </a>
        </div>

        <div class=" d-flex card-body">
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
          <p class="card-text ms-5">CIRCUIT</p>
          <a href="#" class="repeatbtn btn  ms-5">
            REPEAT
          </a>
        </div>
      </div>
    </div>
  );
};
