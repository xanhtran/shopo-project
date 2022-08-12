import Header from '@components/header';
import Home from '@pages/home';
import React from 'react';
import './main-layout.scss';
import Widget from './widget';

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Header />

      <div className="main">
        <div className="widget">
          <Widget />
        </div>

        <div className="outlet-product">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
