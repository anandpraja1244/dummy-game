import React from "react";
import "../component/home.css";

import HowToPlay from "../Components/HowToPlay";
import WelcomeWin11 from "../Components/WelcomeWin11";
import Review from "../Review";
import Download from "./Download";
import Download2 from "./Download2";
import FaqPage from "./FaqaPage";
import FaqPage2 from "./FaqPage2";
import Fetures from "./Fetures";
import Footer from "./Footer";
import Home2 from "./Home2";
function Home() {
  console.log("value");

  return (
    <>
      <div className="bg_color hero_main">
        {/* <div className="hero_left_shape">
          <img src="./image/Group 27.png" alt="sdfs" />
        </div> */}
        <div className="w-100 hero_container">
          <div className="row">
            <div class="col-lg-6 col-sm-12  d-flex justify-content-center align-items-center">
              <div className="hero_left">
                <h2 class="text_heading text-white">WinX11</h2>
                <h6 class="my-4 text_pera  text-white ">
                  Ab Jeet Pakki Hai!!!
                </h6>
                <h5 class="my-3">Download the official WINX11 app</h5>
                <div
                  className="input-group flex-nowrap bg-white rounded hero_input"
                  style={{ width: "85%" }}
                >
                  <span
                    className="input-group-text bg-white border-white"
                    id="addon-wrapping"
                  >
                    +91
                  </span>
                  <input
                    type="text"
                    minLength="10"
                    className="form-control border-white"
                    placeholder="Enter Your Number"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                  <input
                    className="btn yellow px-3"
                    type="submit"
                    id="button-addon2"
                    value="Get Link"
                  />
                </div>
                <div class="download mt-3">
                  <h5>Download the App :</h5>
                </div>
                <div class="row ">
                  <div class="col-sm-12 text-lg-start text-sm-center text-md-start ">
                    
                    <img src="./image/app1.png " class="" alt="store" />
                    <img src="./image/app2.png " class="p-2" alt="store" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 ">
              <div className="hero-right">
                <img src="/image/heroRight.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <WelcomeWin11 />
      <HowToPlay />
      <Fetures />
      <Download2 />
      <FaqPage />
  

    </>
  );
}

export default Home;
