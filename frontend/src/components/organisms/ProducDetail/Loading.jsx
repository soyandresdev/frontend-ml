import React from 'react';
import Skeleton from 'react-loading-skeleton';
import {
  ProducDetailBox,
  Image,
  Description,
  DescriptionTitle,
  InfoBox,
  SoldQuantity,
  Title,
  Price,
} from './ProducDetail.module.scss';

function ProducDetailLoading() {
  return (
    <div className={ProducDetailBox}>
      <div>
        <div>
          <figure className={Image}>
            <Skeleton height={680} width={680} />
          </figure>
        </div>
        <div>
          <h2 className={DescriptionTitle}>
            <Skeleton height={28} />
          </h2>
          <p className={Description}>
            <Skeleton col={10} />
          </p>
        </div>
      </div>
      <div className={InfoBox}>
        <p className={SoldQuantity}>
          <Skeleton height={14} />
        </p>
        <header className={Title}>
          <Skeleton height={24} />
        </header>
        <div className={Price}>
          <Skeleton height={46} />
        </div>
        <Skeleton height={40} />
      </div>
    </div>
  );
}

ProducDetailLoading.defaultProps = {};

ProducDetailLoading.propTypes = {};

export default ProducDetailLoading;
