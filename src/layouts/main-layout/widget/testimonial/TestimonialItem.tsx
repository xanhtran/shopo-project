import React from 'react';
import './testimonial.scss';
import { TestimonialPropsType } from './testimonial.types';

const TestimonialItem = (props: TestimonialPropsType) => {
  const { name, position, quote, userImage } = props;

  return (
    <div className="testimonial">
      <img src={userImage} alt="User image" className="testimonial__user-image" />
      <h5 className="testimonial__owner">{name}</h5>
      <div className="testimonial__owner-position">{position}</div>
      <p className="testimonial__text">{quote}</p>
    </div>
  );
};

export default TestimonialItem;
