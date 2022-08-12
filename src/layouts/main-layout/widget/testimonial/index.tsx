import React from 'react';
import './testimonial.scss';
import TestimonialItem from './TestimonialItem';

const Testimonial = () => {
  return (
    <div className="owl-carousel">
      <div className="owl-statge-outer">
        <TestimonialItem />
      </div>
      <div className="owl-dots"></div>
    </div>
  );
};

export default Testimonial;
