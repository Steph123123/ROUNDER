import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const history = useHistory();

  const input = {
    width: "30rem",
    color: "#000000",
    backgroundColor: "#79D6D9",
    fontzsize: "5rem",
    bordercolor: "#000000",
  };

  return (
    <div className="containerlfuid">
      <div class="jumboregist mt-4 p-5   rounded">
        <h1 className="h1register">Tell us something sbout you...</h1>
        <p>
          Un párrafo, también llamado parágrafo, es una unidad comunicativa
          formada por un conjunto de oraciones secuenciales que trata un mismo
          tema. Está compuesto por un conjunto de oraciones que tienen cierta
          unidad temática o que, sin tenerla, se enuncian juntas
        </p>
      </div>
      <div className=" registro">
        <div className=" col-3"></div>
        <div className="regform row">
          <div className="firstform col mt-2">
            <label
              for="  formGroupExampleInput"
              className="reglabel form-label"
            >
              Name
            </label>
            <input
              type="text"
              className=" inputsign form-control"
              style={input}
              placeholder="Name"
              aria-label="First name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col mt-2">
            <label for="formGroupExampleInput" className="reglabel form-label">
              Last Name
            </label>
            <input
              type="text"
              className="inputsign form-control"
              style={input}
              placeholder="Last name"
              aria-label="Last name"
              name="lastName"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>
        <div className="regform row">
          <div className="col mt-2">
            <label for=" formGroupExampleInput" className="reglabel form-label">
              {" "}
              User Name
            </label>
            <input
              type="text"
              className="inputsign form-control"
              style={input}
              placeholder="User Name"
              aria-label="User Name"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col mt-2">
            <label for=" formGroupExampleInput" className="reglabel form-label">
              {" "}
              Phone
            </label>
            <input
              type="text"
              className="inputsign form-control"
              style={input}
              placeholder="Phone"
              aria-label="Phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="regform row">
          <div className="col mt-2">
            <label for=" formGroupExampleInput" className="reglabel form-label">
              {" "}
              Adress
            </label>
            <input
              type="text"
              className="inputsign form-control"
              style={input}
              placeholder="Adress"
              aria-label="Adress"
              name="address"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </div>
          <div className="col mt-2">
            <label for=" formGroupExampleInput" className="reglabel form-label">
              DNI
            </label>
            <input
              type="text"
              className=" inputsign form-control"
              style={input}
              placeholder="DNI"
              aria-label="dni"
              name="dni"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </div>
        </div>
        <div className="regform row">
          <div className="col mt-2">
            <label for=" formGroupExampleInput" className="reglabel form-label">
              e-mail
            </label>
            <input
              type="email"
              className="inputsign form-control"
              style={input}
              placeholder="e-mail"
              aria-label="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col mt-2">
            <label for=" formGroupExampleInput" className="reglabel form-label">
              Password
            </label>
            <input
              type="password"
              className="inputsign form-control"
              style={input}
              placeholder="Password"
              aria-label="Password"
              name="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          type="button"
          className="signbtn btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => {
            actions.register(
              email,
              password,
              name,
              lastname,
              dni,
              username,
              phone,
              adress
            );
            //if (store.mensaje=="Welcome to Rounder!") {
            history.replace("/login");
            // }
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};
