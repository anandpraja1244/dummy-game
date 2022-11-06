import React,{useState} from "react";

function Contact() {
  const [user,setUser]= useState({
Name:'',
Email:'',
Phone:'',
Address:'',
Subject:'',
TextArea:''


  });

const hanndelChange=((event)=>{
  setUser({...user, [event.target.name]:event.target.value})
})
   const handelSubmit=((event)=>{
  event.preventDefault();
  console.log('first===================>', user)
   })
  return (
    <div>  <div className=" position-relative  legaltyBack">
     
     
    <div className="row  ">
      <div className="col-md-12 " >
      <div className="text-center leaglty_00" >   
      <h2 className="text-light">Contact</h2>
       </div>
       <div className="position-absolute newlegal start-0 ">
    <img src="../image/Group 27.png" alt="fdsfs" width="471px" height="200px" />
  </div>
       <div className="row mt-5 p-4 mb-5 text-light d-flex justify-content-center ">
        <div className="col-lg-6 col-md-6 col-sm-12 cricket_22">
            <form>
              <div class="row  gx-5">
                <div class="form-group col-md-6">
              
                  <input
                    type="text"
                    class="form-control mt-3"
              
                    placeholder="Name"
                    name="Name"
                    onChange={hanndelChange}
                  />
                </div>
                <div class="form-group col-md-6">
                
                <input
                    type="email"
                    class="form-control mt-3"
                 
                    placeholder="Email"
                    name="Email"
                    onChange={hanndelChange}
                  />
                </div>
                
              </div>
              <div class="row gx-5">
                <div class="form-group col-md-6">
              
                  <input
                    type="number"
                    class="form-control mt-3"
               
                    placeholder="Phone "
                    name="Phone"
                    onChange={hanndelChange}
                  />
                </div>
                <div class="form-group col-md-6">
                
                  <input
                    type="text"
                    class="form-control mt-3"
                     placeholder="Address"
                     onChange={hanndelChange}
                     name="Address"
                  />
                </div>
              </div>
              <div class="">
                
                <input
                  type="text"
                  class="form-control mt-3"
                   placeholder="Subject"
                   name="Subject"
                   onChange={hanndelChange}
                />
              </div>
              <div class="form-floating mt-3">
  <textarea 
  class="form-control"
   placeholder="Leave a comment here" 
 
   name="TextArea"
   onChange={hanndelChange}
   style={{height: '100px'}}
   >

   </textarea>
  {/* <label for="floatingTextarea2">Comments</label> */}
</div>
<div class="d-grid gap-2 col-6 mx-auto m-4">
  <button class="btn btn-light" type="button" onClick={handelSubmit}>Submit</button>

</div>
            </form>
          </div>
     
      </div>
       </div>
        </div>
        <div className="cricket_222" >
          <img src="../image/Frame-7.png" width='200px' alt="ajhdajdf" className="cricket_222"/>
        </div>
        </div>
      </div>
   
  );
}

export default Contact;
