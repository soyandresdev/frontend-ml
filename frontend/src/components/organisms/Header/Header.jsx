import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import ResposiveImage from '@UI/Atoms/ResposiveImage';
import Search from '@UI/Molecules/Search';
import sm from '@Static/images/Logo_ML.png';
import lg from '@Static/images/Logo_ML@2x.png';
import { HeaderBox, Nav, Logo, Form } from './Header.module.scss';

function Header() {
  const location = useLocation();
  const history = useHistory();
  const { search } = queryString.parse(location.search);
  const [value, setInput] = useState(search);

  return (
    <header className={HeaderBox}>
      <nav className={Nav}>
        <form
          className={Form}
          onSubmit={(event) => {
            history.push(`/items?search=${value}`);
            event.preventDefault();
          }}
        >
          <Link to="/">
            <figure className={Logo}>
              <ResposiveImage small={sm} medium={lg} large={lg} alt="Logo MercadoLibre" />
            </figure>
          </Link>
          <Search
            id="search-field"
            placeholder="Nunca dejes de buscar"
            value={value}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </form>
      </nav>
    </header>
  );
}

export default Header;
