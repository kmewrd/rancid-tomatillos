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




//add event listener to each instance of the poster component
//on click, the movie id should be captured and a new instance of the focus movie should be displayed
//---- can we add the eventlistener to the <div> that is the poster?
//the movie id should be used to initiate an API call for the data to populate the focused movie
//while the focused movie is displayed, the rest of the app should be grayed out (or something)
//the focused movie should be able to be closed and have the rest of the app be visible again
