import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  /*
  Esto tiene que ser una funcion
  if (localStorage.GetItem(token)){
    setLoggedIn(true) ==> este estado tiene que venir del store
  }

  */

  const fontStyles = {
    fontFamily: "Helvetica",
    color: "rgb(59, 135, 135)",
  };

  const btnWidth = {
    width: "8rem",
    color: "#5c1ec7",
	backgroundColor: "#1FBCC2"
  };

  const navbarColor = {
    backgroundColor: "rgb(48, 61, 61)",
  };

  const loginBtn = {
    backgroundColor: "#1FBCC2",
  };

  const regularNavbar = () => {
    return (
      <>
        <Link className="text-decoration-none" to="/home.js">
          
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
        <Link className="text-decoration-none" to="/home">
          <span
            className="navbar-brand mb-0 h1 fs-1 fw-bolder text-uppercase "
            style={fontStyles}
          >
            REX-ROUNDER
          </span>
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
