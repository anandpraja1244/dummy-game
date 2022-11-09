import React from "react";

function To_paly() {
  return (
    <div>
      <div className=" position-relative  legaltyBack">
        <div className="row  ">
          <div className="col-md-12">
            <div className="text-center leaglty_00 bg_color">
              <h2 className="text-light ">How To Play</h2>
            </div>
            <div className="position-absolute newlegal start-0 ">
              <img src="../image/Group 27.png" alt="fdsfs" />
            </div>
           
            <div className="row mt-5 p-4 mb-5 text-light d-flex justify-content-center ">
              <div className="col-lg-10 col-md-10 col-sm-12 cricket_22">
                <p className="mb-5">
                  Playing Fantasy Cricket with Winx11 is easy and
                  straightforward. We understand how passionate cricket fans can
                  get, and we want to keep them engaged by giving them the
                  opportunity to be squad owners on our fantasy platform. All
                  you need is your cricket knowledge and good judgment to build
                  your Winx11 squad within a budget of 100 Cr. Your squad earns
                  points based on the performance of the players you selected in
                  real-life matches. So choose your players wisely!
                </p>

                <h5>How to play fantasy Cricket on Winx11?</h5>

                <p className="my-4">
                  The game's structure is straightforward; all you need is basic
                  knowledge of Cricket and the player's performances. Playing on
                  Winx11 is quite interesting, and we have covered everything in
                  the comprehensive guide
                </p>
              </div>

              {/* <div className="position-absolute newlegal2">
              <img src="../image/icon.png" alt="fdsfs" />
            </div> */}
              <div className="col-lg-10 col-md-10 col-sm-12 cricket_22">
                <div className="">
                  <div className="card  " >
                    <div className=" d-flex align-items-start" id="tabcol_00">
                      <div className="card ">
                        <div
                          className="nav nav-tabs flex-column nav-pills navstart1" style={{background: "#7C7C7C",borderRadius:"30px"}}
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <button
                            className="nav-link active text-white"  style={{fontSize:"14px"}}
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                          >
                            Select A Match
                          </button>
                          <button
                            className="nav-link text-white"  style={{fontSize:"14px"}}
                            id="v-pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-profile"
                            aria-selected="false"
                          >
                            Make Your Squad
                          </button>

                          <button
                            className="nav-link text-white"  style={{fontSize:"14px"}}
                            id="v-pills-messages-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-messages"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-messages"
                            aria-selected="false"
                          >
                            Join A League
                          </button>
                          <button
                            className="nav-link text-white"  style={{fontSize:"14px"}}
                            id="v-pills-settings-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                          >
                            Follow The Match
                          </button>
                          <button
                            className="nav-link text-white"  style={{fontSize:"14px"}}
                            id="v-pills-messages-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-update"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-messages"
                            aria-selected="false"
                          >
                            Updates
                          </button>
                          <button
                            className="nav-link text-white" style={{fontSize:"14px"}}
                            id="v-pills-settings-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-deadline"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                          >
                            Relaxed Deadline
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
                        <p> Any forthcoming contest may be used to choose a match. Various competitions, including ODIs, Test series, and T20 matches, are contested at both the national and international levels throughout the year.</p>
                        <p>At any given time, you can take part in various of matches.</p>
                        <div className="text-center">
                          <img src="/image/select-a-match.png" className="w-50" alt="" />
                        </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-profile"
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab"
                          tabindex="0"
                        >
                           <div class="container menu_wrapper mt-3" id="navLink_00">
                            <ul class="nav nav-tabs " role="tablist">
                              <li class="nav-item">
                                <a
                                  class="nav-link  cool-link active  "
                                  data-bs-toggle="tab"
                                  href="#home"
                                >
                                  Pick your players
                                </a>
                              </li>
                              <li class="nav-item">
                                <a
                                  class="nav-link  cool-link"
                                  data-bs-toggle="tab"
                                  href="#menu1"
                                >
                                  Pick your Squad’s <br /> Captain and
                                  Vice-Captain
                                </a>
                              </li>
                              <li class="nav-item cool-link">
                                <a
                                  class="nav-link  "
                                  data-bs-toggle="tab"
                                  href="#menu2"
                                >
                                  Create Multiple Squads
                                </a>
                              </li>
                            </ul>

                            {/* <!-- Tab panes --> */}
                            <div class="tab-content">
                              <div id="home" class="container tab-pane active">
                                <br />

                                <p>
                                  You can easily create your squad by picking
                                  out 11 players from all 4 categories within a
                                  budget of 100 Cr. where each player holds a
                                  certain value to his name. You must choose the
                                  following amount of players to make up a full
                                  squad:
                                </p>
                                <ol>
                                  <li>Wicket-keeper</li>
                                  <li>Batsmen</li>
                                  <li>Bowlers</li>
                                  <li>Players of any role</li>
                                </ol>

                                <p>
                                  The players you can afford within your budget
                                  are the other consideration you need to make.
                                  Picking players can be a little tricky task.
                                  However, with your understanding of cricket,
                                  your managerial skills, and your players'
                                  performance, you can surely have a fantastic
                                  squad!
                                </p>
                              </div>
                              <div id="menu1" class="container tab-pane fade">
                             
                                <p>
                                 
                                  Once you have picked the players for your
                                  Winx11squad, now’s the time to pick a Captain
                                  and Vice-Captain.
                                </p>
                                <ol>
                                  <li>
                                    Your Captain gets twice the points scored by
                                    him in the real game.
                                  </li>
                                  <li>
                                    Similarly, your Vice-Captain gets 1.5x
                                    points scored by him in the real game.
                                  </li>
                                </ol>
                              </div>
                              <div id="menu2" class="container tab-pane fade">
                                <br />
                                The chances of your win largely depend on how
                                you pick the players in your squad. And to give
                                your more chances of a win, Winx11 lets you
                                create up to 4 squads per match, any of which
                                can be chosen by you to join a battle. All you
                                need to do is simply click on ‘Create Squad’ to
                                create another one.
                              </div>
                              <div className="text-center">
                                <img
                                  src="/image/join-a.png"
                                  className="w-75 h-100"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="v-pills-messages"
                          role="tabpanel"
                          aria-labelledby="v-pills-messages-tab"
                          tabindex="0"
                        >
                        <p>  Join any free or cash league on Winx11 to get a victorious experience, win cash and show the world that you are a great player.</p>
                        <div className="text-center">
                          <img src="/image/join-a.png" className="tab_image" alt="" />
                        </div>

                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-settings"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                          tabindex="0"
                        >
                         <p> While you watch the actual game, keep an eye on your fantasy scorecard, which is updated every two minutes.</p>
                         <div className="text-center">
                          <img src="/image/follow-the-match.png" className="tab_image" alt="" />
                        </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="v-pills-update"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                          tabindex="0"
                        >
                         <p>Your chances of victory are pretty much predetermined by the players you choose for your squad. Additionally, we are aware of how crucial it is for you to have access to all the information you require to make player selections. To help you choose the best players, we have introduced the 'Update' section next to the 'Create Squad' section. It provides you with real-time updates on your players, statistics, and current matches.</p>
                         <div className="text-center">
                          <img src="/image/update.png" className="tab_image " alt="" />
                        </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="v-pills-deadline"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                          tabindex="0"
                        >
                         <p>One more thing Winx11 enables you to do is the opportunity to change your team just one ball before the game begins! This allows you plenty of time to select the people you want to have on your team and play aggressively.
</p>
                         <div className="text-center">
                          <img src="/image/relax.png" className="w-50"  alt=""  />
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

export default To_paly;
