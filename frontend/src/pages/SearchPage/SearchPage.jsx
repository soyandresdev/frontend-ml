import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import BasicRouter from '@UI/Templates/BasicRouter';
import Category from '@UI/Molecules/Category';
import ProducList from '@UI/Organisms/ProducList';
import { useProductsStore } from '@Hooks/store/productsStoreContext';

function SearchPage() {
  const location = useLocation();
  const { search } = queryString.parse(location.search);
  const { data } = useProductsStore();
  return (
    <BasicRouter>
      <section>
        <Category categories={data?.categories} />
        <ProducList search={search || ''} />
      </section>
    </BasicRouter>
  );
}

export default SearchPage;
