import React from 'react';
import { ArrowSliderPropsType } from './slider.types';
import './slider.scss';

const ArrowSlider = (props: ArrowSliderPropsType) => {
  const { children, onNext, onPrev } = props;

  return (
    <div className="custom-arrow-button">
      <span onClick={onPrev} className="custom-arrow-button-">
        Prev
      </span>
      <span onClick={onNext} className="custom-arrow-button-">
        Next
      </span>
      {children}
    </div>
  );
};

export default ArrowSlider;
