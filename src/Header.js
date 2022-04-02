import React from 'react';
import './Header.css';
import SortMenu from './SortMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
        <h1 className="logotype">
          Rancid <span className="green-text">Tomatillos</span>
        </h1>
      </Link>
      <SortMenu />
    </header>
  );
}

export default Header;