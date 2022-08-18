import React from 'react';
import './banner.scss';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-heading">
        <h3 className="banner-heading__title">Home & Garden</h3>
        <p>Starting at</p>
        <div className="banner-heading__price">
          <span className="price-new">$352.00</span>
          <span className="price-old">$452.00</span>
        </div>
        <a href="/" className="banner-heading__book">
          Shop now
        </a>
      </div>

      <div className="banner-image">
        <img src="http://obest.org/html/shopo/assets/images/banners/banner-full.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
