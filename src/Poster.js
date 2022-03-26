import React from 'react';
import './Poster.css';

const Poster = ({id, title, avgRating, releaseDate, posterImg, backdropImg, focusViewOn}) => {
  let releaseYear = new Date(releaseDate);
  releaseYear = releaseYear.getFullYear();

  return (
    <div id={id} className='movie-poster' onClick={() => focusViewOn(id)}>
      <img src={posterImg} alt='' className='poster-image'/>
      <h2>{title}</h2>
      <h3>{releaseYear}</h3>
    </div>
  )
}

export default Poster;