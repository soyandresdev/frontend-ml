import React from 'react';
import PropTypes from 'prop-types';

import { CategoryBox, List } from './Category.module.scss';

export default function Category({ categories }) {
  return (
    <div className={CategoryBox}>
      {categories && (
        <ul className={List}>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

Category.propTypes = {
  categories: PropTypes.instanceOf(PropTypes.array).isRequired,
};
