import React from 'react';
import './Poster.css';

const Poster = ({id, title, avgRating, releaseDate, posterImg, backdropImg}) => {
  return (
    <div id={id} className="movie-poster">
      <img src={posterImg} className="poster-image"/>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
    </div>
  )
}

export default Poster;