import Input from '@components/input';
import React from 'react';
import './newsletter.scss';

const NewsLetter = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="newsletter">
      <a href="">
        <img
          className="newsletter-img"
          src="https://i.pinimg.com/236x/42/9f/68/429f682121d4659d1d255323073fa212--sale-banner-web-banners.jpg"
          alt=""
        />
      </a>

      <div className="newsletter-body">
        <div className="newsletter-body__content">
          <div className="newsletter-body__content__title"> Newsletter</div>
          <div className="newsletter-body__content__description">
            Enter your email address below to subscribe to my newsletter
          </div>
        </div>

        <div className="newsletter-body__subscribe">
          <Input
            name="subscribe"
            type="text"
            placeholder="Email Address"
            value="xanh@gmail.com"
            onChange={(e) => {
              onChange(e);
            }}
          />
          <button className="newsletter-body__subscribe__btn">SubScribe now</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
