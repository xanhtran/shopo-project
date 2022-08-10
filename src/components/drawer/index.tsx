import Accordion from '@components/accordion';
import Logo from '@components/logo';
import React from 'react';
import { DrawerPropsType } from './drawe.types';
import './drawer.scss';
import MenuHeader from './menu';

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
          <Accordion accordionHeader={<MenuHeader />}>
            <div className="drawer-menu-item">Home</div>
          </Accordion>
          <Accordion accordionHeader={<MenuHeader />}>
            <div className="drawer-menu-item">Home</div>
          </Accordion>
          <Accordion accordionHeader={<MenuHeader />}>
            <div className="drawer-menu-item">Home</div>
          </Accordion>
        </div>
      </aside>
    </div>
  );
};

export default Drawer;
