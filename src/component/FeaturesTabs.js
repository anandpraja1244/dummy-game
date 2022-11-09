import React from "react";

function FeaturesTab() {
  return (
    <div>
      <div className=" position-relative  legaltyBack">
        <div className="row  ">
          <div className="col-md-12">
            <div className="text-center leaglty_00 bg_color">
              <h2 className="text-light ">Features</h2>
            </div>
            <div className="position-absolute newlegal start-0 ">
              <img src="../image/Group 27.png" alt="fdsfs" />
            </div>

            <div className="row mt-2 p-4 mb-5 text-light d-flex justify-content-center ">
              {/* <div className="position-absolute newlegal2">
              <img src="../image/icon.png" alt="fdsfs" />
            </div> */}
              <div className="col-lg-10 col-md-10 col-sm-12 cricket_22">
                <div className="">
                  <div className="card  ">
                    <div className=" d-flex align-items-start" id="tabcol_00">
                      <div className="card ">
                        <div
                          className="nav nav-tabs flex-column nav-pills navstart1"
                          style={{
                            background: "#7C7C7C",
                            borderRadius: "30px",
                          }}
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <button
                            className="nav-link active text-white"
                            style={{ fontSize: "14px" }}
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                          >
                            Fast Withdrawal
                          </button>
                          <button
                            className="nav-link text-white"
                            style={{ fontSize: "14px" }}
                            id="v-pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-profile"
                            aria-selected="false"
                          >
                            Rookie Cantest
                          </button>

                          <button
                            className="nav-link text-white"
                            style={{ fontSize: "14px" }}
                            id="v-pills-messages-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-messages"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-messages"
                            aria-selected="false"
                          >
                            Leaderboard
                          </button>
                          <button
                            className="nav-link text-white"
                            style={{ fontSize: "14px" }}
                            id="v-pills-settings-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                          >
                            Free Coin Module
                          </button>
                          <button
                            className="nav-link text-white"
                            style={{ fontSize: "14px" }}
                            id="v-pills-messages-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-update"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-messages"
                            aria-selected="false"
                          >
                            Private Contest
                          </button>
                          <button
                            className="nav-link text-white"
                            style={{ fontSize: "14px" }}
                            id="v-pills-settings-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-deadline"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                          >
                            Stock Fantasy
                          </button>

                          <button
                            className="nav-link text-white"
                            style={{ fontSize: "14px" }}
                            id="v-pills-settings-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-referral"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                          >
                            Referral bonus
                          </button>

                          <button
                            className="nav-link text-white"
                            style={{ fontSize: "14px" }}
                            id="v-pills-settings-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-customersupport"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                          >
                            24/7 Customer Support
                          </button>

                          <button
                            className="nav-link text-white"
                            style={{ fontSize: "14px" }}
                            id="v-pills-settings-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-inpterface"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                          >
                            User-Friend Interface
                          </button>
                        </div>
                      </div>
                      <div
                        className="tab-content cradtab_00 "
                        id="v-pills-tabContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="v-pills-home"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                          tabindex="0"
                        >
                          <p>
                            Withdrawals will be processed from the cash free or
                            Paytm. There is instant
                          </p>
                          <p>
                            withdrawal. Users have the opportunity to claim
                            their funds in a little as 48 hrs. You find
                            yourselfmanaged to win money.
                          </p>
                          <div className="text-center">
                            <img
                              src="/image/fastWithdrawal.png"
                              className="w-50"
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-profile"
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab"
                          tabindex="0"
                        >
                          <p>
                            Here, users can feel a stress and fear-free
                            environment, build confidence in the game, and have
                            the opportunity to master the game.
                          </p>
                          <div className="text-center">
                            <img
                              src="/image/rookiecontest.png"
                              className="w-50"
                              alt=""
                            />
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="v-pills-messages"
                          role="tabpanel"
                          aria-labelledby="v-pills-messages-tab"
                          tabindex="0"
                        >
                          <p>
                            {" "}
                            Admin can define price, referrals and maximum cap
                            for users at the top of the lead.
                          </p>
                          <p>
                            This is a function that allows you to track the tour
                            results of private tournaments shared by group
                            members. User can view the referral and fantasy
                            point ranking on the leader board under more
                            selection.
                          </p>
                          <div className="text-center">
                            <img
                              src="/image/leaderboard.png"
                              className="w-50 "
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-settings"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                          tabindex="0"
                        >
                          <p>
                            {" "}
                            The emphasize permit users to pick up coins within
                            the app. Once coin are packs, they are accessible,
                            user can pick up coins to share in contests and
                            accomplish various exertion within the coins. It’s
                            like having another currency in a system that
                            increases the flow of funds on the platform.
                          </p>
                          <div className="text-center mt-5">
                            <img
                              src="/image/freecoin.png"
                              className="w-50 h-100"
                              alt=""
                            />
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="v-pills-update"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                          tabindex="0"
                        >
                          <p>
                            Now users of the website can create their own
                            contests and invite their friends and family to play
                            with them. This way they will be sure that they are
                            playing with a known person who matches their same
                            skills as theirs. They can create free or paid
                            contests and if they create paid contests they can
                            also earn extra money by doing so.
                          </p>
                          <div className="text-center">
                            <img
                              src="/image/privatecontest.png"
                              className="w-50 h-100"
                              alt=""
                            />
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="v-pills-deadline"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                          tabindex="0"
                        >
                          <p>
                            Users can learn more about stock trading with their
                            favorite stock fantasy games. We have three types of
                            stocks.
                          </p>
                          <p>
                            Stock Equity -: where users can buy/sell stocks
                            according to the available portfolio.
                          </p>
                          <p>
                            Stock Fantasy -: where users can buy/sell as per the
                            stock size.
                          </p>
                          <p>
                            Stock Prediction -: where user needs to make a
                            prediction on stocks as per the candle.
                          </p>
                          <div className="text-center">
                            <img
                              src="/image/stackfantasy.png"
                              className="w-50 h-100"
                              alt="stackfantasy"
                            />
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="v-pills-referral"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                          tabindex="0"
                        >
                          <p>
                            Winx11 desires to grant a special bonus of feeling
                            for you, wherever not solely you earn real money
                            whereas enjoying fantasy sports on our platform
                            however cojointly you'll be able to refer additional
                            and earn more and become a partner with one amongst
                            the best fantasy sports app : winx11 Why play alone
                            after you can get your friends and family on board &
                            build it your own hub of fantasy recreation and make
                            real money on the side?
                          </p>
                          <div className="text-center">
                            <img
                              src="/image/Referbonus.png"
                              className="w-75 h-100"
                              alt="stackfantasy"
                            />
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="v-pills-customersupport"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                          tabindex="0"
                        >
                          <p>
                            This feature provides user full support that can
                            help them to get answers for their questions as soon
                            as possible. We offer best services to all our users
                            through our 24/7 services. We fulfill all the needs
                            of our clients that help them to solve their problem
                            very easily.
                          </p>
                          <div className="text-center">
                            <img
                              src="/image/customersupport.png"
                              className="w-75 h-100"
                              alt="stackfantasy"
                            />
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="v-pills-inpterface"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                          tabindex="0"
                        >
                          <p>
                            A user – friendly interface help user to easily
                            understand and operate through the application in an
                            easy way. It gives an ideal user experience by user
                            get positive emotion it. It should be simple for
                            well executive effective interaction between the
                            user and the app.
                          </p>
                          <div className="text-center">
                            <img
                              src="/image/interface.png"
                              className="w-50 h-100"
                              alt="stackfantasy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="cricket_22" >
              <img src="../image/Frame-11.png" width='200px' alt="ajhdajdf"/>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesTab;
