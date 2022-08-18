import React from 'react';
import ProductSeller from './section/ProductSeller';
import WantedProduct from './section/WantedProduct';
import './selling-product.scss';

const SellingProduct = () => {
  return (
    <div className="selling-product">
      <ProductSeller heading="Best Seller" />
      <ProductSeller heading="Sale" />
      <WantedProduct />
    </div>
  );
};

export default SellingProduct;
