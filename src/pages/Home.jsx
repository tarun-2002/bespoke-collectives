import React from "react"
import {Link} from "react-router-dom"
import Testimonial from "./Testimonial"
function Home(){
    return(<>
    <section>
       <div id="myCarousel" data-interval="1000" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">

      <div class="carousel-item active caro">
        <img class ="d-block w-100"  src="/images/banner1.png" alt=""/>
      </div>

      <div class="carousel-item caro">
        <img class ="d-block w-100"  src="/images/banner2.png" alt=""/>
      </div>

      <div class="carousel-item caro">
        <img class ="d-block w-100"  src="/images/banner3.png" alt=""/>
      </div>

      <div class="carousel-item caro">
        <img class ="d-block w-100"  src="/images/banner4.png" alt=""/>
      </div>

      <div class="carousel-item caro">
        <img class ="d-block w-100"  src="/images/banner5.png" alt=""/>
      </div>

    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </section>

<section className="home-wrapper-2 py-5">
    <div className="container-fluid">
        <div className="row features"><div className="col-12 p-3">
            <div className="services d-flex align-items-center justify-content-between pad">
                <div className="">
                    <img src="/images/services-truck.svg" alt="services" />
                    <div>
                        <h6>Free Shipping</h6>
                        <p>From all orders over Rs.499</p>
                    </div>
                </div>
                <div className="" >
                    <img src="/images/services-gift.svg" alt="services" />
                    <div>
                        <h6>Daily Offers</h6>
                        <p>Save upto 25% OFF</p>
                    </div>
                </div>
                <div className="">
                    <img src="/images/services-headphone.svg" alt="services" />
                    <div>
                        <h6>Support 24/7</h6>
                        <p>Talk to our Expert</p>
                    </div>
                </div>
                <div className="">
                    <img src="/images/services-percent.svg" alt="services" />
                    <div>
                        <h6>Affordable Prices</h6>
                        <p>Get Perfect Price</p>
                    </div>
                </div>
                <div className="">
                    <img src="/images/services-card.svg" alt="services" />
                    <div>
                        <h6>Secure Payments</h6>
                        <p>100% Protected</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</section>

<section>
<div className="featured ">
<div className="container">
  <div className="row">
    <div className="features-heading col my-3 items-align-center">
      <h3 >Featured Categories</h3>
      <p>Our hot drops, selected with love and passion.</p>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-3">
      <div className="article-box">
        <a href="#">
          <div className="image"><img src="/images/cat1.png"/></div>
          <div className="description">
            <div className="name">Chocolates</div>
            <div className="text-more">See more</div>
          </div>
        </a>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="article-box">
        <a href="#">
          <div className="image"><img src="/images/cat2.png"/></div>
          <div class="description">
            <div className="name">Self Care</div>
            <div className="text-more">See more</div>
          </div>
        </a>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="article-box">
        <a href="#">
          <div className="image"><img src="/images/cat3.png"/></div>
          <div className="description">
            <div className="name">Gifts</div>
            <div className="text-more">See more</div>
          </div>
        </a>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="article-box">
        <a href="#">
          <div className="image"><img src="/images/cat4.png"/></div>
          <div className="description">
            <div className="name">Boxes</div>
            <div className="text-more">See more</div>
          </div>
        </a>
      </div>
    </div>
    
  </div>
</div>
</div>
</section>

<section className="testi col">
    <div className="features-heading col items-align-center">
      <h3>Testimonials</h3>
    </div>
    </section>

<section className="reviews">

<Testimonial />
</section>

<section className="featured-about section_all abt-bg" >
    
            <div class="container ">
                            <div class="row">
                                <div class="pt-3 col-lg-12">
                                    <div class="features-heading col items-align-center">
                                        <h3 class="font-weight-bold ">ABOUT US</h3>
                                        <div class="">
                                            <i class=""></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                        <div class="row vertical_content_manage mt-4">
                                            <div className="col-12 d-flex">
                                            <div class="col-lg-6">
                                                <div class="about_header_main mt-3">

                                                    <h4 class="about_heading text-capitalize font-weight-bold mt-4">BeSpoke Collectives</h4>
                                                    <p class="text-muted mt-3">Welcome to BeSpoke Collectives, a gifting company that specializes in creating unique and personalized gifts for all occasions. At BeSpoke Collectives, we believe that every gift should be as special as the person receiving it. That's why we put our heart and soul into curating each and every gift to make it truly bespoke.</p>

                                                    <p class="text-muted mt-3"> We are a team of passionate and creative individuals who are dedicated to making gifting an unforgettable experience. Our aim is to take the stress out of gifting and provide you with a seamless and enjoyable shopping experience. We offer a wide range of products, from custom-made gift boxes to personalized home decor and accessories. Our gifts are not just thoughtful and practical, but they are also beautiful and unique.</p>
                                                </div>
                                            </div>
                                            
                                                                <div className="row row-about-img ">
                                                                    <div className="col-sm-3">
                                                                    <div className="article-box  d-flex">
                                                                        <a href="#">
                                                                        <div className="image size"><img src="/images/aboutfeature.webp"/></div>
                                                                        </a>
                                                                    </div>
                                                                    </div>
                                                                   </div>
                                                                   </div>

                <div class="row mt-3">
                    <div class="col-lg-4">
                        <div class="about_content_box_all mt-3">
                            <div class="about_detail text-center">
                                <div class="about_icon">
                                    <i class="fas fa-pencil-alt"></i>
                                </div>
                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold">Creative Design</h5>
                                <p class="edu_desc mt-3 mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="about_content_box_all mt-3">
                            <div class="about_detail text-center">
                                <div class="about_icon">
                                    <i class="fab fa-angellist"></i>
                                </div>
                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold">We make Best Result</h5>
                                <p class="edu_desc mb-0 mt-3 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="about_content_box_all mt-3">
                            <div class="about_detail text-center">
                                <div class="about_icon">
                                    <i class="fas fa-paper-plane"></i>
                                </div>
                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold">best platform </h5>
                                <p class="edu_desc mb-0 mt-3 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

</section>

    </>);
}
export default Home;