import React from 'react';
import Slider, { CustomArrowProps, Settings } from 'react-slick';
import { sliderImage } from './slider.constants';
import './slider.scss';

const SampleNextArrow = (props: CustomArrowProps) => {
  const { className, onClick } = props;

  return <div className={`${className} nextArrow`} onClick={onClick} />;
};

const SamplePrevArrow = (props: CustomArrowProps) => {
  const { className, onClick } = props;

  return <div className={`prevArrow ${className}`} onClick={onClick} />;
};

const SimpleSlider = () => {
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {sliderImage.map((item) => {
        return (
          <div key={item.id} className="slider">
            <img src={item.urls} alt="" className="slider__image" />
            <h3 className="slider__title">{item.title}</h3>
            <button className="slider__btn">Shop Now</button>
          </div>
        );
      })}
    </Slider>
  );
};

export default SimpleSlider;
