import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductItem from '@UI/Molecules/ProductItem';
import Loading from '@UI/Molecules/ProductItem/Loading';
import { useProductsStore } from '@Hooks/store/productsStoreContext';
import useProductAction from '@Hooks/actions/products';
import { ProducListBox, EmptyState } from './ProducList.module.scss';

function ProductList({ search }) {
  const { data, loading } = useProductsStore();
  const { getProducts } = useProductAction({ search });

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [search]);

  if (loading) {
    return (
      <div className={ProducListBox}>
        {Array(4)
          .fill({})
          .map((product, index) => (
            <Loading key={index.toString()} />
          ))}
      </div>
    );
  }
  return (
    <div className={ProducListBox}>
      {data?.items?.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
      {data?.items?.length === 0 && (
        <div className={EmptyState}>
          <h2>No encontramos datos son la busqueda &apos;{search}&apos;</h2>
        </div>
      )}
    </div>
  );
}

ProductList.defaultProps = {
  search: '',
};

ProductList.propTypes = {
  search: PropTypes.string,
};

export default ProductList;
