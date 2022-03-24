import React from 'react';
import './Movies.css';
import Poster from './Poster';

const Movies = ({movies}) => {
  const allMovies = movies.map(movie => <Poster key={movie.id} id={movie.id} title={movie.title} avgRating={movie.average_rating} releaseDate={movie.release_date} posterImg={movie.poster_path} backdropImg={movie.backdrop_path}/>)

  return (
    <div>
      {allMovies}
    </div>
  )
}

export default Movies;