import { ProductType } from '@App/common/types';
import { getProducts } from '@App/entities/product/product.api';
import React, { useEffect, useState } from 'react';
import { BestSellerPropsType } from '../selling-product.types';
import BestSellerItem from './BestSellerItem';

const ProductSeller = (props: BestSellerPropsType) => {
  const { heading } = props;

  const [sellerProduct, setSellerProduct] = useState<ProductType[]>();

  // const getProductSeller = () => {
  //   const data = getProducts();
  //   if (data) setSellerProduct(data);
  // };

  useEffect(() => {
    const sellerProduct = async () => {
      getProducts();
    };
  }, [sellerProduct]);

  return (
    <div className="best-seller">
      <div className="best-seller__heading">{heading}</div>
      <div className="best-seller__body">
        <BestSellerItem heading="" />
      </div>
    </div>
  );
};

export default ProductSeller;
