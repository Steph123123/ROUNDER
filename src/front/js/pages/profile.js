import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import swal from 'sweetalert';
import "../../styles/home.css";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState();
  const [edit, setEdit] = useState(false);
  const imgProfile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setUser({ ...user, profile_picture: e.target.files[0] });
    }
  };

  return (
    <div className="profcont container text-center mt-5">
      <div className="card mb-3 w-100 bg-secondary">
        <div className=" imgprof row g-0 ">
          <div className="col-md-4  align-middle m-auto">
            <img
              src={store.user.img}
              className="rounded-circle "
              width="300"
              height="300"
              alt="..."
            />
          </div>
          <div className="col-md-8 ">
            <div className="card-body">
              <h5 className="username card-title">{store.user.name}</h5>
              <fieldset disabled={edit ? false : true}>
                <div className="input-group w-50 mt-5  m-auto">
                  <input
                    type="file"
                    className=" editbtd form-control w-50 "
                    onChange={imgProfile}
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                  />
                </div>

                <div className="mb-2 d-flex justify-content-center">
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control mt-3 mb-3 w-50"
                    placeholder="NAME"
                    defaultValue={store.user.name}
                    onChange={(e) => {
                      setUser({ ...user, name: e.target.value });
                    }}
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
                    placeholder="ADRESS"
                    defaultValue={store.user.adress}
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
              </fieldset>
              {edit?(<button
                type="button"
                class="editbtn btn btn-info"
                onClick={() => {
                  actions.editUser(user);
                  setEdit(false)
                }}
              >
                <strong>SAVE CHANGES</strong>
              </button>) : (<button
                type="button"
                class="editbtn btn btn-info"
                onClick={() => {
                  setEdit(true)
                }}
              >
                <strong>EDIT</strong>
              </button>)}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
