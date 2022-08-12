import React from 'react';
import './testimonial.scss';

const TestimonialItem = () => {
  return (
    <div className="testimonial">
      <img
        src="https://o.remove.bg/downloads/bd4d0c30-190f-43d7-8fbb-9c25cbf1bd3e/user-profile-icon-removebg-preview.png"
        alt="User image"
        className="testimonial__user-image"
      />
      <h5 className="testimonial__owner">John Smith</h5>
      <div className="testimonial__owner-position">CEO & Founder Okler</div>
      <p className="testimonial__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>
  );
};

export default TestimonialItem;
