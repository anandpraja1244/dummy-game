import React from "react";

function FaqPage() {
  return (
    <div>
      <div className="container-fluid py-5 position-relative" style={{background:"black"}}>
        <div className="row  ">
          <div className="col-md-12">
            <div className="">
              <h3 className="text-center text-light main_heading "> FAQs</h3>
              <div className=" ">
                <hr className=" m-auto" style={{width:"14%",color:"#7CC6FF!important",height:"3px"}} />
              </div>
            </div>
            <div className="position-absolute newlegal start-0 ">
              <img
                src="/image/Group 27.png"
                alt="fdsfs"
                width="auto"
                className=" "
              />
            </div>
            <div className="row   p-4  d-flex justify-content-center ">
              <div className="col-lg-8 col-md-8 col-sm=12 cricket_22">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item mb-3 ">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo1"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                       Even if I am not familiar with cricket rules and regulations, can I still play?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                      Yes, Once you begin playing this game, you will learn everything about cricket
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3 ">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button bg-info collapsed primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo4"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                       Can I switch the team for Live/ongoing Match?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                      No. After the match has begun, users are not permitted to change their team.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree6"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                      How much does it cost to join a contest?
                      </button>
                    </h2>
                    <div
                      id="collapseThree6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                      It also depends on the type of contest although you have both options to join paid as well as a free contest
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed  bg-info table-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree88"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                       What is the Winx11 Affiliate System?
                      </button>
                    </h2>
                    <div
                      id="collapseThree88"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                      The concept is simple. If your community is strong, you can become our Affiliate member where you will provide with a special link and one can use the same link to register on winx11. A commission will be paid to affiliates for any registrations made using the link.

                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree9"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                      Can I compete with my friends/family/colleagues?
                      </button>
                    </h2>
                    <div
                      id="collapseThree9"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree9"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                      You can create your own Private Contest and invite your friends and family to play & compete with you.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3 ">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed bg-info  table-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree55"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                     Is Winx11 safe and legal in India?

                      </button>
                    </h2>
                    <div
                      id="collapseThree55"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                      Yes. It is totally safe & legal in India as it is considered as "Game of Skill" where user can predict any ongoing or upcoming match.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cricket_222">
                <img
                  src="/image/Frame-7.png"
                  width="200px"
                  alt="ajhdajdf"
                  className="cricket_222"
                />
              </div>
        
     
        {/* <div className="container">
        <div className="row ">
  <div className="col ">
  <img src="../image/Group 31.png" width='11%' height="345px" alt="ajhdajdf" className=""/>
  </div>
 
  <div className="col ml-auto p-2 d-flex justify-content-end">
  <img src="../image/Group 31.png" width='11%' height='345px' alt="ajhdajdf" className=""/>
  </div>
</div>
</div> */}
      </div>
      </div>
          </div>
      </div>
    </div>
  );
}

export default FaqPage;
