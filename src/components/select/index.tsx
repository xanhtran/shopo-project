import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SelectPropsType } from './select.types';
import './select.scss';

const Select = (props: SelectPropsType) => {
  const { data } = props;

  const [isActive, setIsActive] = useState<boolean>(false);

  const handleChangeDropdown = () => {
    setIsActive(true);
  };

  return (
    <div className="select-container">
      <div className="select-dropdown">
        <div className="select-dropdown-btn" onClick={handleChangeDropdown}>
          {data[0].label}
          <div className="select-dropdown-icon">
            <ArrowDropDownIcon />
          </div>
        </div>

        {isActive && (
          <div className="select-dropdown-content">
            {data?.map((item, index) => {
              return (
                <div key={index} className="select-dropdown-item">
                  {item.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
