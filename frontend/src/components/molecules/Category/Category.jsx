import React from 'react';
import { useProductsStore } from '@Hooks/store/productsStoreContext';
import { CategoryBox, List } from './Category.module.scss';

export default function Category() {
  const { data } = useProductsStore();
  return (
    <div className={CategoryBox}>
      {data?.categories && (
        <ul className={List}>
          {data?.categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
