import React from 'react';
import PropTypes from 'prop-types';
import Input from '@UI/Atoms/Input';
import { SearchBox, SearchButton } from './Search.module.scss';

function Search({ value, onChange, placeholder }) {
  return (
    <div className={SearchBox}>
      <Input
        type="text"
        id="search-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button type="submit" className={SearchButton} />
    </div>
  );
}

Search.defaultProps = {
  value: '',
};

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Search;
