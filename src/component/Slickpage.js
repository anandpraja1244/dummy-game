
import React from "react";
import Slider from "react-slick";
// import SampleNextArrow from "./SampleNextArrow";
// import SampleNextArrow from "./SamplePrevArrow";

function Slickpage()  {
    
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    //   nextArrow: <SampleNextArrow/>,
    //   prevArrow: <SampleNextArrow />
    };
    return (
      <div>
      <div className="container mt-5 bg-danger">
      <Slider {...settings} className="w-100">
          <div className="bg-success">
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
       
      </div>
     );
    }
  

export default Slickpage