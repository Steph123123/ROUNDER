import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const { store, actions } = useContext(Context);

  const fontStyles = {
    fontFamily: "Helvetica",
    color: "#00bfd8",
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
        <Link className=" text-decoration-none" to="/">
          <span
            className="navbar-brand mb-0 h1 fs-1 fw-bolder text-uppercase "
            style={fontStyles}
          >
            REX-ROUNDER
          </span>
        </Link>
        <div className="ml-auto d-flex">
          <Link className="me-2" to="/login">
            <a class="navbtn nav-link active" aria-current="page" href="#">
              <strong>LOG IN</strong>
            </a>
          </Link>
          <Link to="/register">
            <a class="navbtn nav-link active" aria-current="page" href="#">
              <strong>SIGN UP</strong>
            </a>
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
        </Link>
        <Link
          to="/"
          class="navbtn nav-link active"
          aria-current="page"
          href="#"
        >
          <strong>Home</strong>
        </Link>

        <Link
          to="/aboutus"
          class="navbtn nav-link active"
          aria-current="page"
          href="#"
        >
          <strong>About us</strong>
        </Link>
        <Link
          to="/contact"
          class="navbtn nav-link active"
          aria-current="page"
          href="#"
        >
          <strong>Contact</strong>
        </Link>

        <div className="nav-item dropdown ">
          <a
            class="usernamenavbtn nav-link dropdown-toggle "
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={store.user.img}
              class="rounded-circle me-2"
              width="50"
              height="50"
              alt="..."
            />

            <strong>{store.user.name}</strong>
          </a>
       
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link to="/profile" class="dropdown-item" href="#">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/lastrounds" class="dropdown-item" href="#">
              Last Rounds
            </Link>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <Link
              to="/"
              onClick={() => actions.logout()}
              class="dropdown-item"
              href="#"
            >
              Logout
            </Link>
          </li>
        </ul>
        </div>
        <div className="ml-auto d-flex"></div>
      </>
    );
  };

  return (
    <nav className="navbar navbar-light" style={navbarColor}>
      <div className="container d-flex">
        {store.isLoggedIn ? userLoggedNavbar() : regularNavbar()}
      </div>
    </nav>
  );
};
