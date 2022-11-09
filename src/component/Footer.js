import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="bg_color footer_bg">
        <footer className="text-white text-start">
          {/* style={{backgroundColor:' #228EBD'}} */}

          <div className="container p-4">
            <div className="row mt-4 d-flex justify-content-center">
              <div className="col-lg-4 col-md-4 mb-4 mb-md-0 ">
                <div className="">
                  <img src="./image/winlogo.png" alt="footer" />
                </div>
                <div className="mx-5">
                  <div className="">
                    <p className="mx-4 ">Contact Us</p>
                  </div>
                  <div className="mt-3  " style={{ zIndex: "9" }}>
                    {/* <!-- Facebook --> */}
                    <a href="https://www.facebook.com/profile.php?id=100086010265262" target="_blank" className="ms-2">
                      <i
                        className="fa-brands fa-facebook  fa-2x "
                        style={{ color: "#fff", zIndex: "99999" }}
                      ></i>
                    </a>
                    {/* <!-- insta --> */}
                    <a href="https://www.instagram.com/numacgames" target="_blank" className="ms-4">
                      <i
                        className="fa-brands fa-instagram  fa-2x"
                        style={{ color: "#fff", zIndex: "99999" }}
                      ></i>
                    </a>
                    {/* <!-- Twitter --> */}
                    <a href="https://twitter.com/NumacG" target="_blank" className="ms-4">
                      <i
                        className="fa-brands fa-twitter  fa-2x"
                        style={{ color: "#fff", zIndex: "99999" }}
                      ></i>
                    </a>
                  </div>
                  <div className="mt-4 ms-2">
                    {/* <!-- Google + --> */}
                    <a href="https://in.pinterest.com" target="_blank" className="">
                      <i
                        className="fa-brands fa-pinterest  fa-2x"
                        style={{ color: "#fff", zIndex: "99999" }}
                      ></i>
                    </a>
                    {/* <!-- aedin --> */}
                    <a href="https://www.youtube.com/channel/UCOAa0znXVddmKhxWRBBnEFA" target="_blank" className="ms-4">
                      <i
                        className="fa-brands fa-youtube  fa-2x"
                        style={{ color: "#fff", zIndex: "99999" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 mb-4 mb-md-0 ">
                <div className="row justify-content-center">
                  <div className="col border-start">
                    <ul className="fa-ul" style={{ listStyle: "none" }}>
                      <li className="mb-3">
                        <span className="fa-li"></span>
                        <span className="ms-2">
                          <Link
                            to="/Download2"
                            className="text-light text-decoration-none"
                          >
                            Download App
                          </Link>
                        </span>
                      </li>
                      <li className="mb-3">
                        <span className="fa-li"></span>
                        <span className="ms-2">
                          <Link
                            to="/How-to-play"
                            className="text-light text-decoration-none"
                          >
                            How to Play
                          </Link>
                        </span>
                      </li>
                      <li className="mb-3">
                        <span className="fa-li"></span>
                        <span className="ms-2">
                          <Link
                            to="/AboutUs"
                            className="text-light text-decoration-none"
                          >
                            About
                          </Link>
                        </span>
                      </li>
                      <li className="mb-3">
                        <span className="fa-li"></span>
                        <span className="ms-2">
                          <Link
                              to="/features"
                            className="text-light text-decoration-none"
                          >
                            Features
                          </Link>
                        </span>
                      </li>
                      <li className="mb-3">
                        <span className="fa-li"></span>
                        <span className="ms-2">
                          <Link
                            to="/faq"
                            className="text-light text-decoration-none"
                          >
                            FAQs
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col ">
                    <ul className="fa-ul" style={{ listStyle: "none" }}>
                      <li className="mb-3">
                        <span className="fa-li"></span>
                        <span className="">
                          <Link
                            to="/TermCond"
                            className="text-light text-decoration-none"
                          >
                            Terms & Conditions
                          </Link>
                        </span>
                      </li>
                      <li className="mb-3">
                        <span className="fa-li"></span>
                        <span className="">
                          
                          <Link
                            to="/Priavacy"
                            className="text-light text-decoration-none"
                          >
                            
                            Privacy Policy
                          </Link>
                        </span>
                      </li>
                      <li className="mb-3">
                        <span className="fa-li"></span>
                        <span className=" text-light">
                          
                          <Link
                            to="/legality"
                            className="text-light text-decoration-none"
                          >
                            Legality
                          </Link>
                        </span>
                      </li>
                      <li className="mb-3">
                        <span className="fa-li"></span>
                        <span className="">
                          <Link
                            to="/Contact"
                            className="text-light text-decoration-none"
                          >
                            Contact us
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-4 mb-4 mb-md-0  border-start"
                style={{ zIndex: "6" }}
              >
                {/* <div className="position-relative">
                  <div className="left_footer_bg">
                    <img
                      src="../image/Group 27.png"
                      width="300px"
                      className="rotede_102 "
                      alt="ewfwef"
                    />
                  </div>
                </div> */}
                <h5 className="text-uppercase mb-4n text-center">
                  Payment Partner
                </h5>

                <div className="d-flex justify-content-center">
                  <img src="/image/cashfree.png" width="35%" height="70px" alt="pay"  style={{ zIndex: 9,borderRadius:"12px" }} />
                </div>
                <div className="d-flex justify-content-center p-2">
                  <img
                    src="/image/paytm.png"
                    alt="pay" width="37%" height="70px"
                    style={{ zIndex: 9,borderRadius:"12px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <Link className="text-white" to="/">
              
              Sudha Numac Games Pvt. Ltd. All Right Reserved
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
