import React from 'react';
import './Poster.css';
import { Link } from 'react-router-dom'

const Poster = ({id, title, avgRating, releaseDate, posterImg, backdropImg, focusViewOn}) => {
  let releaseYear = new Date(releaseDate);
  let url = `/${id}`
  releaseYear = releaseYear.getFullYear();
  
  return (
    <Link to={url}>
      <div id={id} className='movie-poster' >
        <img src={posterImg} alt='' className='poster-image'/>
        <h2>{title}</h2>
        <h3>{releaseYear}</h3>
      </div>
    </Link>
  )
}

export default Poster;