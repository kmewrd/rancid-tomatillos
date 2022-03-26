import React, { Component } from 'react';
import fetchAPI from './APIcalls';
import './SingleMovie.css';

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    }
  }

  getSingleMovie = (id) => {
    fetchAPI.fetchSingleMovie(id)
      .then(data => this.setState({ movie: data.movie }))
  }

  componentDidMount = () => this.getSingleMovie(this.props.id);

  render() {
    let movie = this.state.movie;
    let movieDetails;
    
    if (movie) {
      let movieGenres;
      let movieYear = new Date(this.state.movie.release_date);
      movieYear = movieYear.getFullYear();

      if (this.state.movie.genres.length > 1) {
        movieGenres = this.state.movie.genres.join(', ');
      } else {
        movieGenres = this.state.movie.genres.join('');
      }
      
      movieDetails =
        <div className='modal-window'>
          <div className='title-and-rating'>
            <h1>{this.state.movie.title}</h1>
            <h2>Rating: {this.state.movie.average_rating.toFixed(1)}</h2>
          </div>
          <img src={this.state.movie.backdrop_path} alt='' />
          <div className='movie-details'>
            <div className='year-and-genres'>
              <h3>Runtime: {this.state.movie.runtime} minutes</h3>
              <h3>Year released: {movieYear}</h3>
              <h3>Genres: {movieGenres}</h3>
            </div>
            <p className='movie-description'>{this.state.movie.overview}</p>
          </div>
        </div>
    }

    return (
      <div className='single-movie-container'>
        <button className='back-button' onClick={this.props.focusViewOff}>Return to main</button>
        {!this.state.movie ? <p>Sorry, please try again later.</p> : movieDetails}
      </div>
    );
  }
}

export default SingleMovie;