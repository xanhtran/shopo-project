import React from 'react';
import './category/category.constants';
import Category from './category';
import NewsLetter from './news-letter';
import Testimonial from './testimonial';
import './widget.scss';

const Widget = () => {
  return (
    <>
      <div className="widget-category-list">
        <h3 className="widge-title">Category</h3>
        <Category />
      </div>
      <div className="widget-newletter">
        <NewsLetter />
      </div>
      <div className="widget-testimonial">
        <Testimonial />
      </div>
    </>
  );
};

export default Widget;
