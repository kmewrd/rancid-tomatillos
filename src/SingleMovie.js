import React from 'react';
import './SingleMovie.css';

const SingleMovie = ( {focusViewOff} ) => {
  return (
    <div>
      <h1>Fake Movie Title</h1>
      <img src="https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg" />
      <h2>Average Rating: 6</h2>
      <h3>2019</h3>
      <p>
        Some overview that is full of buzzwords to attempt to entice you to
        watch this movie! Explosions! Drama! True love! Robots! A cute dog!
      </p>
      <button onClick={focusViewOff} >Return to main</button>
    </div>
  );
  

}

export default SingleMovie