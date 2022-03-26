import React from 'react';
import './Poster.css';

const Poster = ({id, title, avgRating, releaseDate, posterImg, backdropImg, focusViewOn}) => {
  return (
    <div id={id} className="movie-poster" onClick={() => focusViewOn(id)}>
      <img src={posterImg} className="poster-image"/>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
    </div>
  )
}

export default Poster;