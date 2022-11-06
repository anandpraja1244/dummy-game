import React from "react";

import SampleNextArrow from "./SampleNextArrow"

function Download2(props) {
 
  return (
    <div>
      <div className="container-fluid " style={{backgroundColor:'#000000'}}>
        <div className="row d-flex justify-content-center ">
          <div className="col  text-center ">
            <h3 className="text-cenetr text-light  main_heading mt-3">
              DOWNLOAD APP 
            
            </h3>
            <p className="fs-5 text-white">  FOR FREE</p>
          </div>
          <div className="col-12  d-flex justify-content-center mt-3 mb-5">
            <img
              src="./image/app1.png"
              width="180px"
              alt="asdasjdhas"
              class="mx-2 "
            />
            <img
              src="./image/app2.png"
              width="180px"
              alt="adjshjahd"
              class=""
            />
          </div>
        </div>
        <div className="row mt-4 d-flex aligen-item-center">
          <div className="col-3">
            <img
              src="./image/batetwo.png"
              width="100%"
              alt="adjshjahd"
              class=""
            />
          </div>
          <div className="col-2">
            <img
              src="./image/phone1.png"
              width="100%"
              alt="adjshjahd"
              class="zoom"
            />
          </div>
          <div className="col-2">
            <img
              src="./image/phone2.png"
              width="81%"
              alt="adjshjahd"
              class="zoom"
            />
          </div>
          <div className="col-2">
            <img
              src="./image/phone1.png"
              width="100%"
              alt="adjshjahd"
              class="zoom"
            />
          </div>
          <div className="col-3">
            <img
              src="./image/batetwo.png"
              width="100%"
              alt="adjshjahd"
              class=""
            />
          </div>
        </div>
      
        <div className=" mt-5 d-flex justify-content-center">
        <div className="row feture mb-5 d-flex justify-content-center ">
          <div className="col-md-12  mt-5 review_99 ">
            <div className="mt-5 ">
              <h3 className="text-center text-light main_heading">Reviews</h3>
              <div className=" ">
                <hr className="new_222" />
              </div>
            </div>
          </div>
        </div>
          <div className="col-8  mt-5">
         
      <div className="mt-5">
      <div className=" container-fluid mt-5">
        <div className="row  ">
          
        <SampleNextArrow/>
          </div>
       
      </div>
       
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download2;
