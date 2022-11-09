import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Review() {
  return (
    <>
    <div className="py-5">
      <div className="container">
        <h3 className="Review text-white text-center ">Review</h3>
        <hr className="m-auto" style={{ width: "10%", height: "3px" }} />
        
        <Swiper
           slidesPerView={1}
           spaceBetween={55}
        //    loop={true}
        //    navigation={true}
        //    modules={[Pagination, Navigation]}
        //    pagination={{
        //      clickable: true,
        //    }}
           breakpoints={{
             640: {
               slidesPerView: 2,
               spaceBetween: 20,
             },
             768: {
               slidesPerView: 4,
               spaceBetween: 40,
             },
             1024: {
               slidesPerView: 3,
               spaceBetween: 10,
             },
           }}
    
           className="mySwiper"
        >
          <SwiperSlide>
            <div class="card main_card_section">
              <div className="profile_image ">
                  <img
                    src="/image/review/1.jpeg"
                    className=""
                    alt="ssss"
                  />
                </div>
              <div class="card-body">
              <h5 className="card-title p-1  text-center"> Gaurav</h5>
                    <p className="review_para">
                      Winx11 is the best fantasy sports app with many unique
                      features. It also lets me create a private contest. If you
                      love Cricket, you can surely play on Winx11 & win.
                    </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card main_card_section">
              <div className="profile_image ">
                  <img
                    src="/image/review/2.jpeg"
                    className=""
                    alt="ssss"
                  />
                </div>
              <div class="card-body">
              <h5 className="card-title p-1 text-center">Aryan</h5>
                    <p className="review_para">
                      Their Rookie Contest is Mind-Blowing. Here, I competed
                      with the players who matched my stats and I get a chance
                      to win at a basic level. Thank you Winx11!
                    </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card main_card_section">
              <div className="profile_image ">
                  <img
                    src="/image/review/3.jpeg"
                    className=""
                    alt="ssss"
                  />
                </div>
              <div class="card-body">
              <h5 className="card-title p-1 text-center">Jaydeep</h5>
                    <p className="review_para">
                      As I am a big Cricket Fan and always love to use my skills
                      to determine the performance of players, I prefer to play
                      live fantasy on winx11.
                    </p>
              </div>
            </div>
          </SwiperSlide>
       
        </Swiper>
      </div>
      </div>
    </>
  );
}
