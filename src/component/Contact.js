import React, { useState } from "react";

function Contact() {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Subject: "",
    TextArea: "",
  });

  const hanndelChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    console.log("first===================>", user);
  };
  return (
    <div>
      {" "}
      <div className=" position-relative  legaltyBack">
        <div className="row  ">
          <div className="col-md-12 col-sm-12 ">
            <div className="text-center leaglty_00">
              <h2 className="text-light">Contact</h2>
            </div>
            <div className="position-absolute newlegal start-0 ">
              <img src="../image/Group 27.png" alt="fdsfs" />
            </div>
            <div className="row mt-5 p-4 mb-5 text-light d-flex justify-content-center ">
              <div className="col-lg-6 col-md-6 col-sm-12 cricket_22">
                <form>
                  <div className="row  gx-5">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control mt-3 text-white"
                        placeholder="Name"
                        name="Name"
                        onChange={hanndelChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        className="form-control mt-3 text-white"
                        placeholder="Email"
                        name="Email"
                        onChange={hanndelChange}
                      />
                    </div>
                  </div>
                  <div className="row gx-5">
                    <div className="form-group col-md-6">
                      <input
                        type="number"
                        className="form-control mt-3 text-white"
                        placeholder="Phone "
                        name="Phone"
                        onChange={hanndelChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control mt-3 text-white"
                        placeholder="Address"
                        onChange={hanndelChange}
                        name="Address"
                      />
                    </div>
                  </div>
                 
                  <div className="form-floating mt-3 text-white">
                    <textarea
                      className="form-control text-white"
                      placeholder="Leave a comment here"
                      name="TextArea"
                      onChange={hanndelChange}
                      style={{ height: "100px" }}
                    ></textarea>
                    {/* <label for="floatingTextarea2">Comments</label> */}
                  </div>
                  <div className="d-grid gap-2 col-6 mx-auto m-4">
                    <button
                      className="btn btn-info text-white"
                      type="button"
                      onClick={handelSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="cricket_222">
          <img
            src="../image/Frame-7.png"
            width="200px"
            alt="ajhdajdf"
            className="cricket_222"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
