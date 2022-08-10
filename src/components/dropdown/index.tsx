import React, { useState, useRef } from 'react';
import { DropdownPropsType } from './dropdown.types';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './dropdown.scss';

const Dropdown = (props: DropdownPropsType) => {
  const { data } = props;
  const [open, setOpen] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);
  const divEls = document.querySelectorAll('.dropdown-container .dropdown-content');

  const toggle = () => {
    setOpen(!open);

    divEls.forEach((element) => {
      if (element.classList.contains('dropdown-active')) {
        element.classList.remove('dropdown-active');
      }
    });

    divRef.current?.classList.toggle('dropdown-active');
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggle}>
        Home
        <div className="dropdown-icon">
          <AddOutlinedIcon className="dropdown-icon-add" />
        </div>
      </div>
      <div className="dropdown-content" ref={divRef}>
        {open && (
          <div>
            {data?.map((item, index) => {
              return (
                <div className="dropdown-item" key={index}>
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

export default Dropdown;
