import React from 'react';
import PropTypes from 'prop-types';
import { InputStyles } from './Input.module.scss';

function Input({ type, placeholder, value, onChange, ...rest }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={InputStyles}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}
Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
