import React from 'react';
import './SingleMovie.css';

const SingleMovie = ( {focusViewOff} ) => {
  return (
    <div className='modal-window'>
      <button onClick={focusViewOff} className='back-button'>Return to main</button>
      <img src="https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg" />
      <div className='title-and-rating'>
        <h1>Fake Movie Title</h1>
        <h2><span className='green-text'>Rating: 6</span></h2>
      </div>
      <div className='year-and-genres'>
        <h3>2019</h3>
        <h3>Genres: Romance</h3>
      </div>
      <p>
        Some overview that is full of buzzwords to attempt to entice you to
        watch this movie! Explosions! Drama! True love! Robots! A cute dog!
      </p>
    </div>
  );
  

}

export default SingleMovie