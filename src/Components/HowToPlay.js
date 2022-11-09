import React from "react";
import "./howtoplay.css";
function HowToPlay() {
  return (
    <div>
      <div className="howToPlay bg-black">
        <div className=" ">
          {/* <div className="">
            <img
              src="../image/icon.png "
              width="400px"
              height="400px"
              alt="dsfds"
            />
          </div> */}
          <div className="container  position-relative">
            <div className="row d-flex justify-content-center ">
              <div class="col p-4 text-light ">
                <h2 className="text-center ">
                  How to play Fantasy Cricket on
                  <span style={{ color: "#7CC6FF" }}> Winx11</span>?
                </h2>
                <hr className="w-75 m-auto " />
                <p className="text-center mt-3 text-justify">
                  Playing Fantasy Cricket with Winx11 is very simple and easy.
                  It is an online platform of cricket that played through a
                  mobile app. Firstly  needs to download, once the app has
                  been downloaded and ready, user needs to create their own
                  Fantasy Cricket team.
                  The points you earn is directly depends on how your selected
                  team play on the match day.
                </p>
              </div>
            </div>
            <div className="HowToPlay_bottom_image ">
              <div className="">
                <img
                  src="../image/Frame.png"
                  className="img-fluid"
                  alt="ime"
                />
              </div>
              <div className="Howtoplay_right_image">
                <img
                  src="/image/icon.png"
                  className="img-fluid"
                  alt="ime"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToPlay;
