import React from 'react';
import './Header.css';
import SortMenu from '../SortMenu/SortMenu';
import { NavLink } from 'react-router-dom';

const Header = ({ updateRenderedMovies }) => {
  return (
    <header>
      <NavLink to="/" style={{ textDecoration: 'none', color: '#fff' }}>
        <h1 className='logotype'>
          Rancid <span className='green-text'>Tomatillos</span>
        </h1>
      </NavLink>
      <SortMenu updateRenderedMovies={updateRenderedMovies} />
    </header>
  );
}

export default Header;