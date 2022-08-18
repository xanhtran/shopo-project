import { ProductType } from '@App/common/types';
import { getProducts } from '@App/entities/product/product.api';
import React, { useEffect, useState } from 'react';
import { BestSellerPropsType } from '../selling-product.types';
import BestSellerItem from './BestSellerItem';

const ProductSeller = (props: BestSellerPropsType) => {
  const { heading } = props;

  const [sellerProduct, setSellerProduct] = useState<ProductType[]>();

  useEffect(() => {
    const getProductSeller = async () => {
      const data = await getProducts();

      if (data) setSellerProduct(data);
    };

    getProductSeller();
  }, [sellerProduct]);

  return (
    <div className="product-seller">
      <div className="product-seller__heading">{heading}</div>
      <div className="product-seller__body">
        {sellerProduct?.map((item, index) => {
          if (index < 2)
            return (
              <BestSellerItem
                key={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
                // rating={(item?.rating?.rate, item.rating?.count)}
              />
            );
        })}
      </div>
    </div>
  );
};

export default ProductSeller;
