import React from 'react';
import './Poster.css';
import { Link } from 'react-router-dom';

const Poster = ({ id, title, posterImg }) => {
  let url = `/${id}`
  
  return (
    <Link to={url} style={{ textDecoration: 'none', color: '#fff' }}>
      <div id={id} className='movie-poster'>
        <img src={posterImg} alt='' className='poster-image'/>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default Poster;