import React from "react";
import { Link } from "react-router-dom";

function NavBarW() {
  return (
    <div>
     <div className="">
     <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
          <Link class="navbar-brand text-light" to="/">
          <img src="./image/winlogo.png" width="60%" height="auto" alt="logo"/>
          </Link>
          <button
            class="navbar-toggler  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon  "></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-light">
              <li class="nav-item">
                <Link
                  class="nav-link text-light active px-3"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light px-3" to="/AboutUs">
                  About US
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light px-3" to="/To_paly">
                  How To Play
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light px-3" to="/FaqaPage">
                  FAQs
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link text-light px-3 " to="/Contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     </div>
    </div>
  );
}

export default NavBarW;
