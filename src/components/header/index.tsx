import Input from '@components/input';
import Logo from '@components/logo';
import Select from '@components/select';
import React, { useState } from 'react';
import { categories, currencies, languages } from './header.constants';
import './header.scss';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Drawer from '@components/drawer';

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <header className="header">
      <Logo />

      <div className="header-dropdown">
        <Select data={currencies} />

        <div className="header-language">
          <Select data={languages} />
        </div>
      </div>

      <div className="search-form-container">
        <div className="header-dropdown-search">
          <Select data={categories} />
        </div>

        <div className="header-input-search">
          <Input name="input" type="text" value="" placeholder="Search" />
          <button className="search-icon">
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className="top-links">
        <div className="signin">Sign in</div>

        <div className="cart"> Cart </div>
      </div>

      <div className="cart-dropdown">
        <LocalMallOutlinedIcon />
        <ArrowDropDownIcon />
      </div>

      <button className="sidemenu" onClick={handleClick}>
        <MenuIcon />
      </button>

      {isActive && <Drawer setIsActive={setIsActive} />}
    </header>
  );
};

export default Header;
