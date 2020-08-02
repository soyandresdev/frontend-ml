import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import BasicRouter from '@UI/Templates/BasicRouter';
import ProducDetail, { Loading } from '@UI/Organisms/ProducDetail';
import { useProductsStore } from '@Hooks/store/productsStoreContext';
import useProductAction from '@Hooks/actions/products';

import Category from '@UI/Molecules/Category';

function SearchPage() {
  const { id } = useParams();
  const { product, loading } = useProductsStore();
  const { getProduct } = useProductAction();

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <BasicRouter>
      <section>
        <Category categories={product?.categories} />
        {loading && isEmpty(product) && <Loading />}
        {!loading && !isEmpty(product) && <ProducDetail product={product} />}
      </section>
    </BasicRouter>
  );
}

export default SearchPage;
