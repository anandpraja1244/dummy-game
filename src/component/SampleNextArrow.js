import React, { Component } from "react";
import Slider from "react-slick";
import {  BsCaretLeftFill} from 'react-icons/bs';
import { AiOutlineCaretRight, } from 'react-icons/ai';




export default class CustomArrows extends Component {
  render() {
    const settings = {
      // dots: true,
      arrow:true,
      // autoplay:true,
      speed:500,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <AiOutlineCaretRight color="#fff" size={100} />,
      prevArrow: <BsCaretLeftFill  color="#fff" size={100}/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };
    
    return (
      <div>
      <div className="container">
        <Slider {...settings}>
          <div className="row  gx-0">
          <div className=" col-lg-4 col-md-4 col-sm-12 position-relative  mt-5 gx-0">
            <div class="card  mt-5 rounded-5 " style={{ width: "17rem" }} >
              <div class="card-body">
                <h5 class="card-title  text-end">Gaurav</h5>
                <p class="card-text">
                Winx11 is the best fantasy sports app with many unique features. It also lets me create a private contest. 
                </p>
              </div>
            </div>
            <div className="  profile ">
              <img src="./image/batetwo.png" class="card-img-top" alt="ssss" />
            </div>
          </div> 
          </div>
          <div>
          <div className=" col-lg-4 col-md-4 col-sm-12 position-relative  mt-5">
            <div class="card  mt-5 rounded-5 " style={{ width: "17rem" }} >
              <div class="card-body">
                <h5 class="card-title  text-end">Aryan</h5>
                <p class="card-text">
                Winx11 is the best fantasy sports app with many unique features. It also lets me create a private contest. 
                </p>
              </div>
            </div>
            <div className="  profile ">
              <img src="./image/batetwo.png" class="card-img-top" alt="ssss" />
            </div>
          </div> 
          </div>
          <div>
          <div className=" col-lg-4 col-md-4 col-sm-12 position-relative  mt-5">
            <div class="card  mt-5 rounded-5 " style={{ width: "17rem" }} >
              <div class="card-body">
                <h5 class="card-title  text-end">Aryan</h5>
                <p class="card-text">
                Winx11 is the best fantasy sports app with many unique features. It also lets me create a private contest. 
                </p>
              </div>
            </div>
            <div className="  profile ">
              <img src="./image/batetwo.png" class="card-img-top" alt="ssss" />
            </div>
          </div> 
          </div>
          <div>
          <div className=" col-lg-4 col-md-4 col-sm-12 position-relative  mt-5">
            <div class="card  mt-5 rounded-5 " style={{ width: "17rem" }} >
              <div class="card-body">
                <h5 class="card-title  text-end">Gaurav</h5>
                <p class="card-text">
                Winx11 is the best fantasy sports app with many unique features. It also lets me create a private contest. 
                </p>
              </div>
            </div>
            <div className="  profile ">
              <img src="./image/batetwo.png" class="card-img-top" alt="ssss" />
            </div>
          </div> 
          </div>
          <div>
          <div className=" col-lg-4 col-md-4 col-sm-12 position-relative  mt-5">
            <div class="card  mt-5 rounded-5 " style={{ width: "17rem" }} >
              <div class="card-body">
                <h5 class="card-title  text-end">Aryan</h5>
                <p class="card-text">
                Winx11 is the best fantasy sports app with many unique features. It also lets me create a private contest. 
                </p>
              </div>
            </div>
            <div className="  profile ">
              <img src="./image/batetwo.png" class="card-img-top" alt="ssss" />
            </div>
          </div> 
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}