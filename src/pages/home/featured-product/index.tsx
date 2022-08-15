import ArrowSlider from '@components/slider/ArrowSlider';
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import ProductItem from './ProductItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './featured-product.scss';

const FeaturedProduct = () => {
  const slideRef = useRef<Slider>(null);

  const handleNextItem = () => {
    slideRef.current?.slickNext();
  };

  const handlePreviousItem = () => {
    slideRef.current?.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  useEffect(() => {
    // const dataProduct = getProduct();
  }, []);

  return (
    <div className="featured-product">
      <h3 className="featured-product__heading"> Featured Product </h3>

      <div className="featured-product__navigate-icon">
        <span onClick={handlePreviousItem}>
          <ArrowBackIosIcon className="prevIcon" />
        </span>
        <span onClick={handleNextItem}>
          <ArrowForwardIosIcon className="nextIcon" />
        </span>
      </div>

      {/* <div style={{ position: 'relative' }}> */}
      {/* <ArrowSlider onNext={handleNextItem} onPrev={handlePreviousItem}> */}
      <Slider {...settings} ref={slideRef}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Slider>
      {/* </ArrowSlider> */}
      {/* </div> */}
    </div>
  );
};

export default FeaturedProduct;
