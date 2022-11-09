import React from "react";
import { Link } from "react-router-dom";

function NavBarW() {
  return (
    <div>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
            <Link className="navbar-brand text-light" to="/">
              <img
                src="./image/winlogo.png"
                width="60%"
                height="auto"
                alt="logo"
              />
            </Link>
            <button
              className="navbar-toggler  "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon  "></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-light">
                <li className="nav-item">
                  <Link
                    className="nav-link text-light active px-3"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light px-3" to="/AboutUs">
                    About US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light px-3" to="/how-to-play">
                    How To Play
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light px-3" to="/faq">
                    FAQs
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-light px-3 " to="/Contact">
                    Contact Us
                  </Link>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-white fw-bolder btn bg-info px-3 btn-sm login_buttton"
                    href="http://app.winx11.com"
                  >
                    Login / Sign up
                  </a>
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
