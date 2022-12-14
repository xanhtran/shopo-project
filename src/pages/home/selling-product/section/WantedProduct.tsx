import '@App/pages/home/selling-product/selling-product.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { sellingProduct } from '../selling-product.constant';

const WantedProduct = () => {
  const slideRef = useRef<Slider>(null);

  const handlePreviousItem = () => {
    slideRef.current?.slickPrev();
  };

  const handleNextItem = () => {
    slideRef.current?.slickNext();
  };

  const setting = {
    isfinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="wanted-product">
      <h3 className="wanted-product__title">Most wanted</h3>

      <div className="wanted-product__slider">
        <span onClick={handlePreviousItem}>
          <ArrowBackIosIcon className="prevIcon" />
        </span>
        <span onClick={handleNextItem}>
          <ArrowForwardIosIcon className="nextIcon" />
        </span>
      </div>

      <Slider {...setting} ref={slideRef}>
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
