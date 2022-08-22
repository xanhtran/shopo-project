import Drawer from '@components/drawer';
import Input from '@components/input';
import Logo from '@components/logo';
import Select from '@components/select';
import { onChangeSelectType } from '@components/select/select.types';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import { categories, currencies, languages } from './header.constants';
import './header.scss';
import { SelectFormType } from './header.types';

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const initialValues = {
    currency: { value: currencies[0].name },
    language: { value: languages[0].name },
    category: { value: categories[0].name },
  };
  const [values, setValues] = useState<SelectFormType>(initialValues);

  const handleClick = () => {
    setIsActive(true);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | onChangeSelectType) => {
    const { name, value } = e.target;

    const formValue = {
      ...values,
      [name]: {
        ...values[name],
        value,
      },
    };

    setValues(formValue);
  };

  useEffect(() => {
    const func = () => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            const header = document.querySelector('.header');

            if (header) {
              if (entry.intersectionRatio < 1) {
                header.classList.add('header-fixed');
              } else {
                header.classList.remove('header-fixed');
              }
            }
          });
        },
        {
          root: null,
          rootMargin: '15px',
          threshold: 1,
        }
      );

      const featuredProductEl = document.querySelector('.featured-product__heading');

      featuredProductEl && observer.observe(featuredProductEl);
    };

    window.addEventListener('DOMContentLoaded', func);

    return () => {
      window.removeEventListener('DOMContentLoaded', func);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-container ">
          <Logo />

          <div className="header-dropdown">
            <Select data={currencies} onChange={onChange} name="currencies" />

            <div className="header-language">
              <Select data={languages} name=" languages" onChange={onChange} />
            </div>
          </div>

          <div className="header-search">
            <div className="header-search__options">
              <Select data={categories} name="categories" onChange={onChange} />
            </div>

            <div className="header-search__input">
              <Input
                name="input"
                type="text"
                value=""
                placeholder="Search"
                onChange={(e) => {
                  onChange(e);
                }}
              />
              <button className="header-search__icon">
                <SearchIcon />
              </button>
            </div>
          </div>

          <div className="header-links">
            <a href="/" className="header-links__signin">
              Sign in
            </a>

            <a href="/" className="header-links__cart">
              Cart
            </a>
          </div>

          <div className="header-cart">
            <LocalMallOutlinedIcon />
            <ArrowDropDownIcon className="header-cart-dropdown" />
          </div>

          <button className="header-sidemenu" onClick={handleClick}>
            <MenuIcon />
          </button>

          {isActive && <Drawer setIsActive={setIsActive} />}
        </div>
      </header>
    </>
  );
};

export default Header;
