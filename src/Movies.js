import React from 'react';
import './Movies.css';
import Poster from './Poster';

const Movies = ({ movies, sortFrom, filterBy }) => {
  const sortMovies = (movies, order) => {
    if (order === 'a-to-z') {
      return movies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'z-to-a') {
      return movies.sort((a, b) => b.title.localeCompare(a.title));
    } else if (order === 'ascending-rating') {
      return movies.sort((a, b) => a.average_rating - b.average_rating);
    } else if (order === 'descending-rating') {
      return movies.sort((a, b) => b.average_rating - a.average_rating);
    } else {
      return movies;
    }
  };
  
  const filterMovies = (movies, filter) => {
    if (filter === 'above-5') {
      return movies.filter(movie => movie.average_rating > 5);
    } else if (filter === 'above-6') {
      return movies.filter(movie => movie.average_rating > 6);
    } else if (filter === 'above-7') {
      return movies.filter(movie => movie.average_rating > 7);
    } else if (filter === 'none' || filter === '') {
      return movies;
    }
  };

  const sortedMovies = sortMovies(movies, sortFrom);
  const filteredMovies = filterMovies(sortedMovies, filterBy);
  
  let allMovies = filteredMovies.map(movie => <Poster key={movie.id} id={movie.id} title={movie.title} avgRating={movie.average_rating} releaseDate={movie.release_date} posterImg={movie.poster_path} backdropImg={movie.backdrop_path}/>)

  return (
    <div className="movie-container" >
      {allMovies}
    </div>
  )
}

export default Movies;