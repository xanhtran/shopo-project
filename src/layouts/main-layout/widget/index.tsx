import React from 'react';
import './category/category.constants';
import Category from './category';
import NewsLetter from './news-letter';
import Testimonial from './testimonial';
import './widget.scss';
import WidgetBanner from '@App/assets/widget-banner.png';

const Widget = () => {
  return (
    <>
      <div className="widget-category-list">
        <h3 className="widget-title">Category</h3>
        <Category />
      </div>

      <div className="widget-banner" style={{ backgroundImage: `url(${WidgetBanner})` }}></div>

      <div className="widget-newsletter">
        <NewsLetter />
      </div>
      <div className="widget-testimonial">
        <Testimonial />
      </div>
    </>
  );
};

export default Widget;
