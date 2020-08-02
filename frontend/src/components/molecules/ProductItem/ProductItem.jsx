import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ResponsiveImage from '@UI/Atoms/ResposiveImage';
import shippingSmall from '@Static/images/ic_shipping.png';
import shippingLg from '@Static/images/ic_shipping@2x.png';
import {
  LinkStyles,
  ProductStyles,
  Box,
  Picture,
  Resume,
  Name,
  Price,
  Address,
  BoxPrice,
} from './ProductItem.module.scss';

function ProductItem({ id, title, picture, price, free_shipping, address }) {
  const formatPrice = (amount) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Link className={LinkStyles} to={`/items/${id}`}>
      <div className={ProductStyles}>
        <div className={Box}>
          <img className={Picture} src={picture} alt={title} />
          <div className={Resume}>
            <div className={BoxPrice}>
              <h2 className={Price}>{formatPrice(price.amount)}</h2>
              {free_shipping && (
                <ResponsiveImage
                  alt="Free shipping"
                  small={shippingSmall}
                  medium={shippingLg}
                  large={shippingLg}
                />
              )}
            </div>
            <h3 className={Name}>{title}</h3>
          </div>
        </div>
        <div>
          <span className={Address}>{address}</span>
        </div>
      </div>
    </Link>
  );
}

ProductItem.defaultProps = {};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.shape({
    amount: PropTypes.number,
  }).isRequired,
  free_shipping: PropTypes.bool.isRequired,
  address: PropTypes.string.isRequired,
};

export default ProductItem;
