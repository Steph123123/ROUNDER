import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import logorex from "../../img/logorex3.jpg";
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
         <img  src= {logorex} width= "100rem"/>
         <span className="rexrounder h1 ms-4"><strong>REX ROUNDER</strong></span>
        </Link>
        <button
          class="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00bfd8"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav col-12 d-flex justify-content-end ">
            <Link className=" nav-item nav-link " to="/login">
              <a class="h3 navbtn nav-link " aria-current="page" href="#">
                <strong>LOG IN</strong>
              </a>
            </Link>
            <Link className="nav-item nav-link " to="/register">
              <a class="h3 navbtn nav-link " aria-current="page" href="#">
                <strong>SIGN UP</strong>
              </a>
            </Link>
          </ul>
        </div>
      </>
    );
  };

  const userLoggedNavbar = () => {
    return (
      <>
        <Link className=" text-decoration-none" to="/">
         <img  src= {logorex} width= "100rem"/>
         <span className="rexrounder h1 ms-4">REX ROUNDER</span>
        </Link>
        <button
          class="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00bfd8"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav col-12 d-flex justify-content-end ">
            <Link to="/" class="nav-item nav-link" aria-current="page" href="#">
              <a class="h4 navbtn nav-link " aria-current="page" href="#">
                <strong>Home</strong>
              </a>
            </Link>

            <Link
              to="/aboutus"
              class="nav-item nav-link"
              aria-current="page"
              href="#"
            >
              {" "}
              <a class="h4 navbtn nav-link " aria-current="page" href="#">
                <strong>About us</strong>
              </a>
            </Link>
            <Link
              to="/contact"
              class="nav-item nav-link"
              aria-current="page"
              href="#"
            >
              <a class="h4 navbtn nav-link " aria-current="page" href="#">
                <strong>Contact</strong>
              </a>
            </Link>

            <div className="nav-item dropdown ">
              <a
                class="usernamenavbtn h4 nav-link dropdown-toggle "
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
          </ul>
        </div>
        <div className="ml-auto d-flex"></div>
      </>
    );
  };

  return (
    <nav className=" navbar navbar-expand-lg" style={navbarColor}>
      <div className="container d-flex">
        {store.isLoggedIn ? userLoggedNavbar() : regularNavbar()}
      </div>
    </nav>
  );
};
