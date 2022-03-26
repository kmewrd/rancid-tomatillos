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
      let movieYear = new Date(this.state.movie.release_date);
      movieYear = movieYear.getFullYear();
      
      movieDetails =
        <div className='modal-window'>
          <button className='back-button' onClick={this.props.focusViewOff}>Return to main</button>
          <img src={this.state.movie.backdrop_path} alt='' />
          <div className='title-and-rating'>
            <h1>{this.state.movie.title}</h1>
            <h2>Rating: {this.state.movie.average_rating.toFixed(1)}</h2>
          </div>
          <div className='year-and-genres'>
            <h3>{movieYear}</h3>
            <h3>{this.state.movie.genres}</h3>
          </div>
          <p>{this.state.movie.overview}</p>
        </div>
    }

    return (
      <div>
        {!this.state.movie ? <p>Sorry, please try again later.</p> : movieDetails}
      </div>
    );
  }
}

export default SingleMovie;