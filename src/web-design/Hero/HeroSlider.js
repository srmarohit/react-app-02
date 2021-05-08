import React from "react";
import style from './HeroSlider.module.css'

export default function HeroSlider() {
  return (
    <div id="demo" class="container-fluid carousel slide p-0" style={{transform:"translateY(-70px)", zIndex:"-1"}} data-ride="carousel">
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <div class="carousel-inner">
        <div class="carousel-item active text-center">
          <img
            src="https://www.eurobank.gr/-/media/holding/omilos/annual-reports/etisios-apologismos-2019/infinity-hero-1440-600.jpg?h=400&w=1440&hash=2F6979054B91EB1D4449E165561A6864BF39BADC"
            alt="Los Angeles"
            style={{ height: "400px", width:'100%'}}
          />

          <div class={"carousel-caption "+ style.sliderCaption}>
            <h3>Los Angeles</h3> 
            <p>We had such a great time in LA!</p>
            <button className="btn btn-md btn-primary">Read More</button>
          </div>

        </div>

        <div class="carousel-item text-center">
          <img
            src="https://www.eurobank.gr/-/media/eurobank/retail/ilektroniki-trapeziki/pos-apoktate-pistotiki-karta-online/promo-e-card-1440-600.jpg?h=400&w=1440&hash=045A20359E6A372AC761A1BC2DD1037884C9F574"
            alt="Chicago"
            style={{ height: "400px", width:'100%' }}
          />

          <div class={"carousel-caption "+ style.sliderCaption}>
            <h3>Los Angeles</h3>
            <p>We had such a great time in LA!</p>
            <button className="btn btn-md btn-primary">Read More</button>
          </div>

        </div>

        <div class="carousel-item text-center">
          <img
            src="https://www.eurobank.gr/-/media/eurobank/omilos/etairiki-koinoniki-euthuni/egg/2021-9os-kuklos/egg-2021-1440-600.jpg?h=400&w=1440&hash=3C8CE2302C77A6B403736CAAD52FEED18EAAFB53"
            alt="New York"
            style={{ height: "400px", width:'100%' }}
          />

          <div class={"carousel-caption "+ style.sliderCaption}>
            <h2>Los Angeles !</h2>
            <h3>We had such a great time in LA!We had such a great time in LA!
            We had such a great time in LA!
            </h3>
            <button className="btn btn-md btn-primary">Read More</button>
          </div>

        </div>
        
      </div>

      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  );
}
