import React from 'react';
import './featured-product.scss';
import { ProductItemPropsType } from './featured-product.types';

const ProductItem = (props: ProductItemPropsType) => {
  const { title, price, image } = props;

  return (
    <div className="product-item">
      <div className="product-item__image">
        <span className="product-item__image__sale">-55%</span>
        <img src={image} alt="" />
      </div>

      <div className="product-item__action">
        <button className="btn-quick-view">Quick view</button>
        <div className="product-item__action__group">
          <a className="product-item__action__wishlist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="m8 6.236l-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2C2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37c.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064c.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92C15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852c-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92C0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008c.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92c0 2.069-1.3 3.288-3.365 5.227c-1.193 1.12-2.642 2.48-4.243 4.38z"
              />
            </svg>
          </a>
          <a className="product-item__action__add-to-cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M922.9 701.9H327.4l29.9-60.9l496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1l-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3l-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9l-56.4 315.8l-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6c0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6c0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"
              />
            </svg>
            Add to cart
          </a>
          <a className="product-item__action__add-to-compare">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H4c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9c0-1.103-.897-2-2-2zM4 11h4v8H4v-8zm6-1V4h4v15h-4v-9zm10 9h-4V9h4v10z"
              />
            </svg>
          </a>
        </div>
      </div>
      {/* <div className="product-item__description"> */}
      <a className="product-item__description__title">{title}</a>
      <div className="product"></div>
      <span className="product-item__description__price">$ {price}</span>
    </div>
    // </div>
  );
};

export default ProductItem;
