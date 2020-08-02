import React from 'react';
import PropTypes from 'prop-types';

import { ButtonBox } from './Button.module.scss';

function Button({ children, type, ...rest }) {
  return (
    <button className={ButtonBox} {...rest} type="button">
      {children}
    </button>
  );
}
Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  type: PropTypes.string,
};

export default Button;
