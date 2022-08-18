import React, { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SelectOptionType, SelectPropsType } from './select.types';
import './select.scss';

const Select = (props: SelectPropsType) => {
  const { data, name, onChange, selected } = props;

  const currentSelected = data.find((item) => item.name === selected) || data[0];

  const [isActive, setIsActive] = useState<boolean>(false);

  const [selectValue, setSelectValue] = useState<SelectOptionType>(currentSelected);

  const handleChangeDropdown = () => {
    setIsActive(!isActive);
  };

  const handleItem = (item: SelectOptionType) => {
    setSelectValue(item);
    setIsActive(false);
    onChange({
      target: {
        name: name,
        value: item.name,
      },
    });
  };

  useEffect(() => {
    setSelectValue(currentSelected);
  }, [selected]);

  return (
    <div className="select-container">
      <div className="select-dropdown">
        <div className="select-dropdown-btn" onClick={handleChangeDropdown}>
          {selectValue.label}
          <div className="select-dropdown-icon">
            <ArrowDropDownIcon />
          </div>
        </div>

        {isActive && (
          <div className="select-dropdown-content">
            {data?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="select-dropdown-item"
                  onClick={() => {
                    handleItem(item);
                  }}
                >
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
