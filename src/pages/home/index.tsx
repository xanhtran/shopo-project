import React from 'react';
import Banner from './banner';
import FeaturedProduct from './featured-product';
import SimpleSlider from './slider';

const Home = () => {
  return (
    <div>
      <SimpleSlider />
      <FeaturedProduct />
      <Banner />
    </div>
  );
};

export default Home;
