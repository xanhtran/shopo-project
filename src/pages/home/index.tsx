import React from 'react';
import Banner from './banner';
import FeaturedProduct from './featured-product';
import SellingProduct from './selling-product';
import SimpleSlider from './slider';

const Home = () => {
  return (
    <div>
      <SimpleSlider />
      <FeaturedProduct />
      <Banner />
      <SellingProduct />
    </div>
  );
};

export default Home;
