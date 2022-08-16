import { ProductType } from '@App/common/types';
import React from 'react';

const BestSellerItem = (props: ProductType) => {
  const { image, title, price } = props;

  return (
    <div className="selling-item">
      <div
        className="selling-item-img"
        style={{
          backgroundImage: `url(http://obest.org/html/shopo/assets/images/products/small/product1.jpg)`,
        }}
      ></div>
      <div className="selling-item-description">
        <span className="rate">5 sao</span>
        <span className="name">{title}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default BestSellerItem;
