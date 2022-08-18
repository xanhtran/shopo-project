import Input from '@components/input';
import React from 'react';
import './newsletter.scss';
import IconEmail from '@App/assets/icon-newsletter-email.png';

const NewsLetter = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="newsletter">
      <div className="newsletter-body">
        <div className="newsletter-body__content">
          <div className="newsletter-body__content__title"> Newsletter</div>
          <div className="newsletter-body__content__description">
            Enter your email address below to subscribe to my newsletter
          </div>
        </div>

        <form className="newsletter-body__subscribe">
          <div className="form-group">
            <img src={IconEmail} alt="" className="icon-email" />
            <Input
              name="subscribe"
              type="text"
              placeholder="Email Address"
              value=""
              onChange={(e) => {
                onChange(e);
              }}
            />
          </div>

          <button className="newsletter-body__subscribe__btn">SubScribe now</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
