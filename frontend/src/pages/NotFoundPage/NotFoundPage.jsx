import React from 'react';
import classnames from 'classnames';
import { useLocation } from 'react-router-dom';
import { Container, Center } from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const location = useLocation();
  return (
    <div className={classnames(Container, Center)}>
      <h2>
        No match for <code>{location.pathname}</code>
      </h2>
    </div>
  );
};

export default NotFoundPage;
