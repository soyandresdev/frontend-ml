import React from 'react';
import PropTypes from 'prop-types';

import Header from '@UI/Organisms/Header';
import { Container, BasicRouterStyles } from './BasicRouter.module.scss';

function BasicRouter({ children }) {
  return (
    <div className={BasicRouterStyles}>
      <Header />
      <main className={Container}>{children}</main>
    </div>
  );
}

BasicRouter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
};
export default BasicRouter;
