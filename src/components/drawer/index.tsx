import Dropdown from '@components/dropdown';
import Logo from '@components/logo';
import React from 'react';
import { DrawerPropsType } from './drawe.types';
import { data } from './drawer.constants';
import './drawer.scss';

const Drawer = (props: DrawerPropsType) => {
  const { setIsActive } = props;

  const closeDrawer = () => {
    setIsActive(false);
  };

  return (
    <div className="drawer-container">
      <div className="drawer-outside" onClick={closeDrawer}></div>
      <aside className="drawer-wrapper">
        <div className="drawer-header">
          <Logo />
        </div>

        <div className="drawer-content">
          <Dropdown data={data} />
          <Dropdown data={data} />
          <Dropdown data={data} />
        </div>
      </aside>
    </div>
  );
};

export default Drawer;
