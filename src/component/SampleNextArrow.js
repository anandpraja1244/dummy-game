import React, { Component } from "react";
import Slider from "react-slick";
import { BsCaretLeftFill } from "react-icons/bs";
import { AiOutlineCaretRight } from "react-icons/ai";

export default class CustomArrows extends Component {
  render() {
    const settings = {
      // dots: true,
      arrow: true,
      // autoplay:true,
      speed: 500,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <AiOutlineCaretRight color="#fff" size={100} />,
      prevArrow: <BsCaretLeftFill color="#fff" size={100} />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <div className="container">
          <h3 className="text-white text-center">Review</h3>
          <Slider {...settings}>
    
              <div className=" position-relative ">
                <div className="card  mt-5 rounded-5 " style={{ width: "17rem",height:"15rem" }}>
                  <div className="card-body p-0">
                    <h5 className="card-title p-1  text-center"> Gaurav</h5>
                    <p className="review_para">
                      Winx11 is the best fantasy sports app with many unique
                      features. It also lets me create a private contest. If you
                      love Cricket, you can surely play on Winx11 & win.
                    </p>
                  </div>
                </div>
                <div className="  profile ">
                  <img
                    src="/image/review/1.jpeg"
                    className="review_image"
                    alt="ssss"
                  />
                </div>
              </div>
         
            <div>
              <div className=" position-relative  ">
                <div className="card  mt-5 rounded-5 " style={{ width: "17rem",height:"15rem" }}>
                  <div className="card-body p-0">
                    <h5 className="card-title p-1 text-center">Aryan</h5>
                    <p className="review_para">
                      Their Rookie Contest is Mind-Blowing. Here, I competed
                      with the players who matched my stats and I get a chance
                      to win at a basic level. Thank you Winx11!
                    </p>
                  </div>
                </div>
                <div className="  profile ">
                  <img
                    src="/image/review/2.jpeg"
                    className="review_image"
                    alt="ssss"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className=" position-relative  ">
                <div className="card  mt-5 rounded-5 " style={{ width: "17rem",height:"15rem" }}>
                  <div className="card-body p-0">
                    <h5 className="card-title p-1 text-center">Jaydeep</h5>
                    <p className="review_para">
                      As I am a big Cricket Fan and always love to use my skills
                      to determine the performance of players, I prefer to play
                      live fantasy on winx11.
                    </p>
                  </div>
                </div>
                <div className="  profile ">
                  <img
                    src="/image/review/3.jpeg"
                    className="review_image"
                    alt="ssss"
                  />
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </Slider>
        </div>
      </div>
    );
  }
}
