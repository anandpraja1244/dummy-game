import React from "react";
function AboutUs() {
  return (
    <div>
      <div className="backColor222">
        <div className="container-fluid">
          <div className="row ">
            <div className="position-relative">
              <div className="col-md-12 ">
                <img
                  src="./image/wgcr.png"
                  alt="dcds"
                  width="100%"
                  height="100%"
                  className="img-fluid"
                />
                <div className="  about_990  position-absolute">
                  <h3 className="text-center text-light fw-bold">About Us</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center love_cricket_main">
            <div className="col-lg-8 col-md-10 col-sm-12 mt-5">
              <div className="do_you_love">
                <img src="/image/Group 27.png" alt="fhfdgh" />
              </div>
              <h2 className="text-center text-white"> Do you love cricket?</h2>
              <p className="text-center p-2 ">
                Then you'll love Winx11 - the fantasy cricket platform that
                gives you the chance to play with the best players. With
                real-time scoring and a huge range of contests, winx11 is the
                ultimate destination for cricket fans. It facilitates the best
                User-Interface and User-Experience with the ultimate gaming
                experience. Here users can create their own virtual team by
                choosing real players for upcoming matches. Our goal is to
                provide the best fantasy sports platform for users to create a
                sports community where everyone can play as they want.
              </p>
              <p className=" text-center p-2">
                Currently we are limited to cricket game but we will increase
                diversity soon to include other sports. we always make sure our
                users get the tactical experience when participating in fantasy
                sports game
              </p>

              <div className="col-md-12 text-sm-center">
                <img
                  src="./image/frame-4.png"
                  alt="dcds"
                  width="135px"
                  height="auto"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className=" row  justify-content-center">
              <div className="col-md-12">
                <h3 className="text-center text-light">FEATURES</h3>
                <div className=" feture2222">
                  <hr
                    className="m-auto"
                    style={{ width: "50%", height: "3px", color: "#B3B9FB" }}
                  />
                </div>
              </div>

              <div className="col-md-12  d-flex justify-content-center mt-4">
                <img
                  src="/image/fraturesBottom.png"
                  alt="dcds"
                  width="100%"
                  height="100%"
                  className="b-auto  img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
