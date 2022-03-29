import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/" ><h1 className='logotype'>Rancid <span className='green-text'>Tomatillos</span></h1></Link>
    </header>
  );
}

export default Header;