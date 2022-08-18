import Accordion from '@components/accordion';
import MenuHeader from '@components/drawer/menu';
import React from 'react';
import { categoryConfig } from './category.constants';
import './category.scss';

const Category = () => {
  return (
    <div className="category-shop-list">
      {categoryConfig.map((category, index) => {
        return (
          <Accordion
            key={index}
            closeOther={false}
            accordionHeader={<MenuHeader>{category.label}</MenuHeader>}
          >
            {category.children &&
              category.children.map((item, index) => {
                return (
                  <a key={index} href={item.path} className="category-shop-item">
                    {item.label}
                  </a>
                );
              })}
          </Accordion>
        );
      })}
    </div>
  );
};

export default Category;
