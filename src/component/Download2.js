import React from "react";
import Review from "../Review";

import SampleNextArrow from "./SampleNextArrow";

function Download2(props) {
  return (
    <div>
      <div className="container-fluid downloadCom">
        <div className="row d-flex justify-content-center ">
          <div className="col  text-center ">
            <h3 className="text-cenetr text-light  main_heading mt-3">
              DOWNLOAD APP
            </h3>
            <p className="fs-5 text-white"> FOR FREE</p>
          </div>
          <div className="col-12  d-flex justify-content-center mt-3 mb-5">
            <img
              src="./image/app1.png"
              width="180px"
              alt="asdasjdhas"
              className="mx-2 "
            />
            <img
              src="./image/app2.png"
              width="180px"
              alt="adjshjahd"
              className=""
            />
          </div>
        </div>
        <div className="row mt-4 d-flex aligen-item-center">
          <div className="col-3">
            <img
              src="./image/batetwo.png"
              width="100%"
              alt="adjshjahd"
              className=""
            />
          </div>
          <div className="col-2">
            <img
              src="./image/phone1.png"
              width="100%"
              alt="adjshjahd"
              className="zoom"
            />
          </div>
          <div className="col-2">
            <img
              src="./image/phone2.png"
              width="81%"
              alt="adjshjahd"
              className="zoom"
            />
          </div>
          <div className="col-2">
            <img
              src="./image/phone1.png"
              width="100%"
              alt="adjshjahd"
              className="zoom"
            />
          </div>
          <div className="col-3">
            <img
              src="./image/batetwo.png"
              width="100%"
              alt="adjshjahd"
              className=""
            />
          </div>
        </div>
 <Review />
       
      </div>
    </div>
  );
}

export default Download2;
