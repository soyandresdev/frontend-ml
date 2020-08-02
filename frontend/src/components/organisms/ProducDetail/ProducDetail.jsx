import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '@Utils/number';
import Button from '@UI/Atoms/Button';
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

function ProducDetail({ product }) {
  return (
    <div className={ProducDetailBox}>
      <div>
        <div>
          <figure className={Image}>
            <img src={product?.picture} alt={`Imagen ${product?.title}`} />
          </figure>
        </div>
        <div>
          <h2 className={DescriptionTitle}>Descripción del producto</h2>
          <p className={Description}>{product?.description}</p>
        </div>
      </div>
      <div className={InfoBox}>
        <p className={SoldQuantity}>
          {product.condition === 'new' ? 'Nuevo' : 'Usado'} - {product?.sold_quantity} vendidos
        </p>
        <header className={Title}>{product?.title}</header>
        <div className={Price}>{formatPrice(product?.price?.amount)}</div>
        <Button aria-label="comprarar">Comprar</Button>
      </div>
    </div>
  );
}

ProducDetail.defaultProps = {};

ProducDetail.propTypes = {
  product: PropTypes.instanceOf(PropTypes.object).isRequired,
};

export default ProducDetail;
