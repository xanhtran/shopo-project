import { getProducts } from '@App/entities/product/product.api';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import './featured-product.scss';
import { ProductItemPropsType } from './featured-product.types';
import ProductItem from './ProductItem';

const FeaturedProduct = () => {
  const [data, setData] = useState<ProductItemPropsType[]>();

  const slideRef = useRef<Slider>(null);

  const handleNextItem = () => {
    slideRef.current?.slickNext();
  };

  const handlePreviousItem = () => {
    slideRef.current?.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const getProduct = async () => {
    const products = await getProducts();

    if (products) {
      setData(products);
    }
  };

  getProduct();

  useEffect(() => {
    const getProduct = async () => {
      await getProducts();
    };

    getProduct();
  }, [data]);

  return (
    <div className="featured-product">
      <h3 className="featured-product__heading"> Featured Product </h3>

      <div className="featured-product__navigate-icon">
        <span onClick={handlePreviousItem}>
          <ArrowBackIosIcon className="prevIcon" />
        </span>
        <span onClick={handleNextItem}>
          <ArrowForwardIosIcon className="nextIcon" />
        </span>
      </div>

      {/* <div style={{ position: 'relative' }}> */}
      {/* <ArrowSlider onNext={handleNextItem} onPrev={handlePreviousItem}> */}
      <Slider {...settings} ref={slideRef}>
        {data?.map((item) => {
          return (
            <ProductItem key={item.id} title={item.title} image={item.image} price={item.price} />
          );
        })}
      </Slider>

      {/* <div className="item">
        {data?.map((item, index) => {
          if (index < 3)
            return (
              <ProductItem key={item.id} title={item.title} image={item.image} price={item.price} />
            );
        })}
      </div> */}

      {/* </ArrowSlider> */}
      {/* </div> */}
    </div>
  );
};

export default FeaturedProduct;
