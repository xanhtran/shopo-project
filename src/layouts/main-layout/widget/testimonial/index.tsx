import React from 'react';
import Slider, { Settings } from 'react-slick';
import { testimonial } from './testimonial.constant';
import './testimonial.scss';
import TestimonialItem from './TestimonialItem';

const Testimonial = () => {
  const setting: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'button__bar',
    arrows: false,
  };

  return (
    <div className="owl-carousel">
      <Slider {...setting}>
        {testimonial?.map((item, index) => {
          return (
            <TestimonialItem
              key={index}
              name={item.name}
              position={item.position}
              userImage={item.userImage}
              quote={item.quote}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonial;
