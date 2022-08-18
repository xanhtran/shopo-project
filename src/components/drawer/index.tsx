import Accordion from '@components/accordion';
import Logo from '@components/logo';
import React from 'react';
import { DrawerPropsType } from './drawer.types';
import './drawer.scss';
import MenuHeader from './menu';
import { menuConfig } from './drawer.constants';

const Drawer = (props: DrawerPropsType) => {
  const { setIsActive } = props;

  const closeDrawer = () => {
    setIsActive(false);
  };

  return (
    <div className="drawer-container">
      <div className="drawer-outside" onClick={closeDrawer}></div>
      <aside className="drawer-wrapper">
        <div className="drawer-wrapper__header">
          <Logo />
        </div>

        <div className="drawer-wrapper__content">
          {menuConfig.map((item, index) => {
            return (
              <Accordion
                key={index}
                closeOther={item?.chilren ? true : false}
                accordionHeader={<MenuHeader path={item?.path}>{item.label}</MenuHeader>}
              >
                {item?.chilren &&
                  item?.chilren.map((item, index) => {
                    return (
                      <a key={index} className="drawer-menu-item" href={item.path}>
                        {item.label}
                      </a>
                    );
                  })}
              </Accordion>
            );
          })}
          {/* <Accordion accordionHeader={<MenuHeader>item.label</MenuHeader>} closeOther={false}>
            <a className="drawer-menu-item" href={''}>
              item.label
            </a>
          </Accordion> */}
        </div>
      </aside>
    </div>
  );
};

export default Drawer;
