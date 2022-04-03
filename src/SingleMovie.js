import React, { Component } from 'react';
import NoMatch from './NoMatch';
import fetchMovieData from './APIcalls';
import './SingleMovie.css';
import ErrorMessage from './ErrorMessage';
import { Link } from 'react-router-dom';
import cleanMovieData from './utils';

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      error: null,
      isLoading: true
    }
  }

  getSingleMovie = (id) => {
    fetchMovieData(id)
      .then(data => this.setState({ movie: cleanMovieData(data), isLoading: false }))
      .catch(err => this.setState({ error: err, isLoading: false }))
  }

  componentDidMount = () => this.getSingleMovie(this.props.id);

  render() {
    let movie = this.state.movie;
    let movieDetails;
    
    if (movie) {
      movieDetails = (
        <div className="modal-window">
          <div className="title-and-rating">
            <h1>{this.state.movie.title}</h1>
            <h2>Rating: 
              <span className="green-text"> {this.state.movie.average_rating.toFixed(1)}</span>
            </h2>
          </div>
          <img src={this.state.movie.backdrop_path} alt="" />
          <div className="movie-details">
            <div className="year-and-genres">
              <h3>Runtime: {typeof this.state.movie.runtime === 'number' ? `${this.state.movie.runtime} minutes` : this.state.movie.runtime}</h3>
              <h3>Year released: {this.state.movie.release_date}</h3>
              <h3>Genres: {this.state.movie.genres}</h3>
            </div>
            <p className="movie-description">{this.state.movie.overview}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="single-movie-container">
        <Link to="/">
          <button className="back-button">Return to main</button>
        </Link>
        {console.log(this.props.id)}
        {this.state.movie && movieDetails}
        {!this.state.movie && !this.state.isLoading && <NoMatch location={this.props.id} />}
        {this.state.error && <ErrorMessage />}
      </div>
    );
  }
}

export default SingleMovie;