import React from 'react';
import Slider from 'react-slick';
import { sellingProduct } from '../selling-product.constant';
import '@App/pages/home/selling-product/selling-product.scss';

const WantedProduct = () => {
  const setting = {
    isfinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="wanted-product">
      <h3 className="wanted-product__title">Most wanted</h3>

      <Slider {...setting}>
        {sellingProduct.map((item) => {
          return (
            <div className="wanted-banner" key={item.id}>
              <img src={item.url} alt="" className="wanted-banner-img" />
              <div className="wanted-banner-content">
                <h4 className="title">Off</h4>
                <span className="sale">{item.sale}</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default WantedProduct;
