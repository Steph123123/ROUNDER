import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const { store, actions } = useContext(Context);

  const fontStyles = {
    fontFamily: "Helvetica",
    color: "#3F9E9E",
  };

  const btnWidth = {
    width: "8rem",
    color: "#FFFFFF",
    backgroundColor: "#3F9E9E",
  };

  const navbarColor = {
    backgroundColor: "rgb(48, 61, 61)",
  };

  const loginBtn = {
    backgroundColor: "#3F9E9E",
  };

  const regularNavbar = () => {
    return (
      <>
        <Link className="text-decoration-none" to="/home">
          <span
            className="navbar-brand mb-0 h1 fs-1 fw-bolder text-uppercase "
            style={fontStyles}
          >
            REX-ROUNDER
          </span>
        </Link>
        <div className="ml-auto d-flex">
          <Link className="me-2" to="/login">
            <button
              onClick={() => setLoggedIn(true)}
              className="btn btn-light  text-uppercase"
              style={btnWidth}
            >
              login
            </button>
          </Link>
          <Link to="/register">
            <button
              className="btn btn-warning  text-uppercase"
              style={loginBtn}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </>
    );
  };

  const userLoggedNavbar = () => {
    return (
      <>
        <Link className="text-decoration-none" to="/">
          <span
            className="navbar-brand mb-0 h1 fs-1 fw-bolder text-uppercase "
            style={fontStyles}
          >
            REX-ROUNDER
          </span>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
        </Link>
        <div className="ml-auto d-flex">
          <Link className="me-2" to="/profile">
            <button className="btn btn-light  text-uppercase" style={btnWidth}>
              Profile
            </button>
          </Link>
          <Link to="/">
            <button
              onClick={() => setLoggedIn(false)}
              className="btn btn  text-uppercase"
              style={btnWidth}
            >
              Logout
            </button>
          </Link>
        </div>
      </>
    );
  };

  return (
    <nav className="navbar navbar-light" style={navbarColor}>
      <div className="container d-flex">
        {loggedIn ? userLoggedNavbar() : regularNavbar()}
      </div>
    </nav>
  );
};
