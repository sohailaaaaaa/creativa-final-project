import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Banner() {
  return (
    <div>
        <div className="banner header-text" >
  <OwlCarousel className="owl-banner owl-carousel" loop items="1">
    <div className="banner-item-01">
      <div className="text-content">
        <h4>Best Offer</h4>
        <h2>New Arrivals On Sale</h2>
      </div>
    </div>
    <div className="banner-item-02">
      <div className="text-content">
        <h4>Flash Deals</h4>
        <h2>Get your best products</h2>
      </div>
    </div>
    <div className="banner-item-03">
      <div className="text-content">
        <h4>Last Minute</h4>
        <h2>Grab last minute deals</h2>
      </div>
    </div>
  </OwlCarousel>
</div>
    </div>
  )
}

export default Banner