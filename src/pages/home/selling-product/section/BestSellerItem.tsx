import React from 'react';
import { BestSellerPropsType } from '../selling-product.types';

const BestSellerItem = (props: BestSellerPropsType) => {
  return (
    <div className="selling-item">
      <div className="selling-item-img">
        <img src="" alt="" className="selling-item-img__image" />
      </div>
      <div className="selling-item-description">
        <span className="rate"></span>
        <span className="name"></span>
        <span className="price"></span>
      </div>
      BestSellerItem
    </div>
  );
};

export default BestSellerItem;
