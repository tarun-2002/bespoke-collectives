import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Testimonial() {
  SwiperCore.use([Autoplay])
  return (
    <>
    
      <Swiper
autoplay={{ delay: 1000 }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonialBox">
            <img className="quote" src="/images/quote.png" alt="" />
            <div className="content">
              <p>I absolutely loved the gift I received from Bespoke Collectives! It was beautifully packaged and the attention to detail was evident in every aspect. The quality of the products was amazing and I could tell that a lot of thought went into curating the perfect gift.</p>
              <div className="details">
                <div className="imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Someone Famous <br /><span>Creative Designer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonialBox">
            <img className="quote" src="/images/quote.png" alt="" />
            <div className="content">
              <p>Bespoke Collectives is my go-to gifting company. Their range of products is diverse and I always find something perfect for every occasion. The team is incredibly helpful and always goes above and beyond to make sure that every detail is perfect.</p>
              <div className="details">
                <div className="imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Someone Famous <br /><span>Creative Designer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonialBox">
            <img className="quote" src="/images/quote.png" alt="" />
            <div className="content">
              <p>I recently ordered a gift from Bespoke Collectives for a friend's birthday and was blown away by the quality of the products and the exceptional service. The gift arrived on time and was beautifully presented. </p>
              <div className="details">
                <div className="imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Someone Famous <br /><span>Creative Designer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonialBox">
            <img className="quote" src="/images/quote.png" alt="" />
            <div className="content">
              <p>Bespoke Collectives truly exceeded my expectations. Their range of gifts is unique and the quality of the products is top-notch. The team was incredibly helpful and responsive throughout the ordering process and made sure that every detail was perfect. </p>
              <div className="details">
                <div className="imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Someone Famous <br /><span>Creative Designer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonialBox">
            <img className="quote" src="/images/quote.png" alt="" />
            <div className="content">
              <p>Bespoke Collectives truly exceeded my expectations. Their range of gifts is unique and the quality of the products is top-notch. The team was incredibly helpful and responsive throughout the ordering process and made sure that every detail was perfect.</p>
              <div className="details">
                <div className="imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Someone Famous <br /><span>Creative Designer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonialBox">
            <img className="quote" src="/images/quote.png" alt="" />
            <div className="content">
              <p>Bespoke Collectives truly exceeded my expectations. Their range of gifts is unique and the quality of the products is top-notch. The team was incredibly helpful and responsive throughout the ordering process and made sure that every detail was perfect.</p>
              <div className="details">
                <div className="imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Someone Famous <br /><span>Creative Designer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonialBox">
            <img className="quote" src="/images/quote.png" alt="" />
            <div className="content">
              <p>Bespoke Collectives truly exceeded my expectations. Their range of gifts is unique and the quality of the products is top-notch. The team was incredibly helpful and responsive throughout the ordering process and made sure that every detail was perfect.</p>
              <div className="details">
                <div className="imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Someone Famous <br /><span>Creative Designer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonialBox">
            <img className="quote" src="/images/quote.png" alt="" />
            <div className="content">
              <p>Bespoke Collectives truly exceeded my expectations. Their range of gifts is unique and the quality of the products is top-notch. The team was incredibly helpful and responsive throughout the ordering process and made sure that every detail was perfect.</p>
              <div className="details">
                <div className="imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Someone Famous <br /><span>Creative Designer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonialBox">
            <img className="quote" src="/images/quote.png" alt="" />
            <div className="content">
              <p>Bespoke Collectives truly exceeded my expectations. Their range of gifts is unique and the quality of the products is top-notch. The team was incredibly helpful and responsive throughout the ordering process and made sure that every detail was perfect.</p>
              <div className="details">
                <div className="imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Someone Famous <br /><span>Creative Designer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonialBox">
            <img className="quote" src="/images/quote.png" alt="" />
            <div className="content">
              <p>Bespoke Collectives truly exceeded my expectations. Their range of gifts is unique and the quality of the products is top-notch. The team was incredibly helpful and responsive throughout the ordering process and made sure that every detail was perfect.</p>
              <div className="details">
                <div className="imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Someone Famous <br /><span>Creative Designer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonialBox">
            <img className="quote" src="/images/quote.png" alt="" />
            <div className="content">
              <p>Bespoke Collectives truly exceeded my expectations. Their range of gifts is unique and the quality of the products is top-notch. The team was incredibly helpful and responsive throughout the ordering process and made sure that every detail was perfect.</p>
              <div className="details">
                <div className="imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Someone Famous <br /><span>Creative Designer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonialBox">
            <img className="quote" src="/images/quote.png" alt="" />
            <div className="content">
              <p>Bespoke Collectives truly exceeded my expectations. Their range of gifts is unique and the quality of the products is top-notch. The team was incredibly helpful and responsive throughout the ordering process and made sure that every detail was perfect.</p>
              <div className="details">
                <div className="imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Someone Famous <br /><span>Creative Designer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </>
  );
}
