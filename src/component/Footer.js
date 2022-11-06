import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
 
<div className=' position-relative '>
  
 


  <footer class="text-white text-start text-lg-start newBa_44 " >
  {/* style={{backgroundColor:' #228EBD'}} */}
 

    <div class="container p-4">
  
      <div class="row mt-4 d-flex justify-content-center">
      
        <div class="col-lg-4 col-md-4 mb-4 mb-md-0 ">
         <div className=''>
            <img src='./image/winlogo.png' alt='footer'/>
         </div>
      <div className='mx-5'>
      <div className=''>
            <p className='mx-4 '>Contact Us</p>
         </div>
          <div class="mt-3 mx-3 " style={{zIndex:'9'}}>
            {/* <!-- Facebook --> */}
            <Link to="" class="p-2"><i class="fa-brands fa-facebook  fa-2x " style={{color:'#fff', zIndex:'99999'}} ></i></Link>
            {/* <!-- Dribbble --> */}
            <Link to="" class="p-2"><i class="fa-brands fa-instagram  fa-2x" style={{color:'#fff', zIndex:'99999'}}></i></Link>
            {/* <!-- Twitter --> */}
            <Link to="" class="p-2"><i class="fa-brands fa-twitter  fa-2x" style={{color:'#fff', zIndex:'99999'}}></i></Link>
            </div>
            <div class="mt-3 mx-3">
            {/* <!-- Google + --> */}
            <Link to="" class="p-2"><i class="fa-brands fa-linkedin-in  fa-2x" style={{color:'#fff', zIndex:'99999'}}></i></Link>
            {/* <!-- Linkedin --> */}
            <Link to="" class="p-2"><i class="fa-brands fa-youtube  fa-2x" style={{color:'#fff', zIndex:'99999'}}></i></Link>
           
          </div>
        
            

      </div>
   
        </div>
      
        <div class="col-lg-4 col-md-4 mb-4 mb-md-0 ">
         <div className='row justify-content-center'>
          
            <div className='col border-start'>
            <ul class="fa-ul" style={{listStyle:'none'}}>
            <li class="mb-3">
              <span class="fa-li"></span><span class="ms-2"><Link  to="/Download2" className='text-light text-decoration-none' >Download App </Link></span>
            </li>
            <li class="mb-3">
              <span class="fa-li"></span><span class="ms-2"><Link  to="/To_paly" className='text-light text-decoration-none' >How to Play </Link></span>
            </li>
            <li class="mb-3">
              <span class="fa-li"></span><span class="ms-2"><Link  to="/AboutUs" className='text-light text-decoration-none' >About  </Link></span>
            </li>
            <li class="mb-3">
              <span class="fa-li"></span><span class="ms-2"><Link  to="/Legalty" className='text-light text-decoration-none' >Features </Link></span>
            </li>
            <li class="mb-3">
              <span class="fa-li"></span><span class="ms-2"><Link  to="/FaqaPage" className='text-light text-decoration-none' >FAQs </Link></span>
            </li>
          </ul>
            </div>
            <div className='col ' >
            <ul class="fa-ul" style={{listStyle:'none'}}>
            <li class="mb-3">
              <span class="fa-li"></span><span class="ms-2"><Link  to="/TermCond" className='text-light text-decoration-none' >Terms & Conditions</Link></span>
            </li>
            <li class="mb-3">
              <span class="fa-li"></span><span class="ms-2"> <Link  to="/Priavacy" className='text-light text-decoration-none' > Privacy Policy </Link></span>
            </li>
            <li class="mb-3">
           <span class="fa-li"></span> <span class="ms-2 text-light"> <Link  to="/Legalty" className='text-light text-decoration-none' >Legality</Link> </span> 
            </li>
            <li class="mb-3">
              <span class="fa-li"></span><span class="ms-2"><Link  to="/Contact" className='text-light text-decoration-none' >Contact us</Link></span>
            </li>
            </ul>
            </div>
         </div>
      
        </div>
    
        <div class="col-lg-4 col-md-4 mb-4 mb-md-0  border-start" style={{zIndex:'6'}}>
        <div class="position-relative">
                      <div class="position-absolute top-50 start-50 translate-middle rotede_1022222 ">

                <img src='../image/Group 27.png' width="300px"  className='rotede_102 ' alt='ewfwef' />
            </div>
          </div>
          <h5 class="text-uppercase mb-4n text-center">Payment Partern</h5>

          <div className='d-flex justify-content-center'>
           <img src='../image/app2.png' alt='pay'/>
          </div>
           <div className='d-flex justify-content-center p-2'>
           <img src='../image/app1.png' alt='pay'  style={{zIndex:'9'}}/>
            </div>
         
        </div>
     
      </div>
    
    </div>
  

    <div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2020 Copyright:
      <a class="text-white" href="">© 2022 Copyright: Sudha Numac Games Pvt. Ltd. All Right Reserved</a>
    </div>
 
  </footer>
  
  </div>
</div>


  )
}

export default Footer