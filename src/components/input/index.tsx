import React from 'react';
import { InputPropsType } from './input.types';
import './input.scss';

const Input = (props: InputPropsType) => {
  const { name, type, value, placeholder, onChange } = props;

  return (
    <div className="input-wrapper">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-type"
      />
    </div>
  );
};

export default Input;
