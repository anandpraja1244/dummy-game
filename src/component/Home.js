import React, { useState } from "react";
import "../component/home.css";
import Download from "./Download";
import FaqPage2 from "./FaqPage2";
import Fetures from "./Fetures";
import Home2 from "./Home2";
import Input from "react-phone-number-input/input";
function Home() {
  const [value, setValue] = useState();
  console.log("value");

  return (
    <div>
      <div className="backColor ">
        <div class="position-relative" id="multimage">
          <img
            src="./image/banner.png"
            width="100%"
            height="474px"
            alt="asdasjdhas"
            class="fishes"
          />
          <img
            src="./image/Group 27.png"
            width="20%"
            alt="adjshjahd"
            class="fish"
          />
          <img
            src="./image/Group 27.png"
            width="20%"
            alt="adjshjahd"
            class="fish_090"
          />
          <img
            src="./image/icon.png"
            width="46%"
            height="626px"
            alt="adjshjahd"
            class="icon_090"
          />
          <div className="container">
            <div className="row">
              <div class="col-5 ">
                <div className="position-absolute fish2">
                  <h2 className="text_heading text-white">WinX11</h2>
                  <h6 className="my-4 text_pera  text-white ">
                    Ab Jeet Pakki Hai!!!
                  </h6>

                  <h5 className="my-3">Download the official WINX11 app</h5>

                  <div class="input-group flex-nowrap bg-white rounded" style={{width:"85%"}}>
                    <span class="input-group-text bg-white" id="addon-wrapping">
                      +91
                    </span>
                    <input
                      type="text"
                      class="form-control border-white"
                      placeholder="Enter Your Number"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                    <button
                      class="btn yellow px-5"
                      type="button"
                      id="button-addon2"
                    >
                      Link
                    </button>
                  </div>

                  {/* <div class="">
                    <span id="feldbox">+91</span>
                    <Input
                      country="IN"
                      className="form-Control  "
                      placeholder="Enter your Number"
                      international
                      value={value}
                      onChange={setValue}
                    />
                  </div>
                  <div class="color_lene00 ">
                    <a
                      href="#jj"
                      class="btn btn-sm px-3"
                      style={{ backgroundColor: "#FCDB38" }}
                    >
                      {" "}
                      Get Link{" "}
                    </a>
                  </div> */}
                  <div className="download mt-3">
                    <h5>Download the App :</h5>
                  </div>
                  <div class="row ">
                    <div class="col-sm-12 text-start ">
                      <img src="./image/app1.png " class="" alt="store" />
                      <img src="./image/app2.png " class="p-2" alt="store" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-7 top-2 d-flex text-center ">
                <div className="positon-absolute fish3  ">
                  <img
                    src="../image/Frame-1.png"
                    width="100%"
                    height="auto"
                    alt="Snow"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ==============================2 section============================= */}
        </div>
        <Home2 />

        <div className="conatiner-fluid phone_07 position-relative">
          <div class="row d-flex justify-content-start">
            <div class="col  ">
              <img
                src="./image/phone1.png"
                alt="Forest"
                className=" phone1_232"
              />
              <img
                src="./image/phone2.png"
                alt="Snow"
                className="ml-auto  phone2_2300"
              />
            </div>
          </div>
        </div>
        <div className="conatiner phone_08 position-relative">
          <div class=" d-flex justify-content-center">
            <div class="col  d-flex justify-content-center">
              <img
                src="./image/Frame.png"
                alt="Forest"
                width="90%"
                className="img-fluid frame_540"
                height="369px"
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="row">
            <div className="col">
              <img
                src="./image/Rectangle.png"
                width="100%"
                className=" feture_one"
                alt="rectangle"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <Fetures />
            </div>
            <div className="col card_9999 ">
              <Download />
              <FaqPage2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
