import React from "react";
import "../styles/walcomeWin11.css";

const WelcomeWin11 = () => {
  return (
    <>
      <div className="WelcomeWin py-5">
        {/* <div className="leftWelcomeImage">
          <img src="./image/Group 27.png" alt="" />
        </div> */}

        <div class=" text-white">
          <div className="row">
            <div class="col-lg-6 col-md-6 col-12  "></div>
            <div class="col-lg-6 col-md-6 col-12 mt-4  d-flex align-items-center flex-column justify-content-center">
              <div className="text-white mt-5 text-lg-end text-sm-start text-pera w-75 welcome_left_text">
                <h5 className="mb-0 ">Welcome</h5>
                <hr className=" mr-lg-auto new1   align-self-end justify-content-end" />
                <h1 className="text_heading text-gray">WINX11</h1>

                <p>
                  Welcome to our unique destination for fantasy sports. WINX11
                  is an online fantasy sports platform where you can create your
                  own tema and compette at the top of the league. Here you have
                  a chance to show your strength on the field and develop a game
                  plan for each battle and have a fun experience here. Be your
                  own captian of skills.
                </p>
              </div>
            </div>
          </div>
          <div className="container" style={{marginTop:"4rem"}}>
            <div class="row justify-content-center align-content-center">
              <div class="col-lg-6 col-md-6 col-12  d-flex  flex-column justify-content-center">
                <h3>
                  Make Fantasy Cricket Team with{" "}
                  <span className="text-gray">Winx11 </span>{" "}
                </h3>
                <p>
                  There are lots of ways in which you can create your fantasy
                  cricket team
                </p>
                <div className="">
                  <ul>
                    <li>Log into your Winx11 account</li>
                    <li>Pick a Match from the upcoming Match List.</li>
                    <li>
                      Select the right combination a nd choose the contest
                    </li>
                    <li>
                      Now Click on the 'Create team' button and select your team
                    </li>
                    <li>
                      Once you choose your playing 11 team, it's time to select
                      the captain and vice-captain wisely.
                    </li>
                    <li>Join multiple teams and multiple contests.</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div className="">
                  <img
                    src="../image/Vector.png"
                    alt="Snow"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                <div className="bothImages d-flex align-items-center">
                  <div className="firstImagePlay">
                    <img
                      src="./image/phone1.png"
                      alt="Forest"
                      className=""
                    />
                  </div>
                  <div className="SecondImagePlay">
                    <img
                      src="./image/phone2.png"
                      alt="Snow"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12 d-flex align-items-center ">
                <div className="position-relative">
                  <h3 className="mb-4">
                    Why play Fantasy Cricket{" "}
                    <span className="text-gray"> Winx11? </span>
                  </h3>
                  <p>
                    Winx11 is a fantasy sports platform where you can have a big
                    chance to play fantasy cricket by availing your sports grip
                    and expertise. You can build team of your own choice by
                    selection real players of your game. It is a platform where
                    you feel the same fever pitch when your chosen player scores
                    century or take a hat – trick. This is the place where you
                    show the world what an enormous fantasy cricket foreman you
                    are!
                  </p>
                  <div className="rightWelcomeImage ">
                  <img src="./image/Group 27.png" alt="" />
                </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeWin11;
