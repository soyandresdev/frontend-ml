import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { ProductStyles, Box, Resume, Name, Address } from './ProductItem.module.scss';

function Loading() {
  return (
    <div className={ProductStyles}>
      <div className={Box}>
        <Skeleton height={180} width={180} />
        <div className={Resume}>
          <Skeleton height={24} width={180} />
          <h3 className={Name}>
            <Skeleton height={18} />
          </h3>
        </div>
      </div>
      <div>
        <span className={Address}>
          <Skeleton height={12} />
        </span>
      </div>
    </div>
  );
}

Loading.propTypes = {};

export default Loading;
