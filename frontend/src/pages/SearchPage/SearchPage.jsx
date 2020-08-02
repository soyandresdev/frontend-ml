import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import BasicRouter from '@UI/Templates/BasicRouter';
import Category from '@UI/Molecules/Category';
import ProducList from '@UI/Organisms/ProducList';
import { ProductsProvider } from '@Hooks/store/productsStoreContext';

function SearchPage() {
  const location = useLocation();
  const { search } = queryString.parse(location.search);
  return (
    <ProductsProvider>
      <BasicRouter>
        <section>
          <Category />
          <ProducList search={search || ''} />
        </section>
      </BasicRouter>
    </ProductsProvider>
  );
}

export default SearchPage;
