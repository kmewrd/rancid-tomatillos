import React, { Component } from 'react';
import fetchAPI from './APIcalls';
import NoMatch from './NoMatch';
import './SingleMovie.css';
import ErrorMessage from './ErrorMessage';
import { Link } from 'react-router-dom';

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      error: null,
    }
  }

  getSingleMovie = (id) => {
    fetchAPI.fetchSingleMovie(id)
      .then(data => this.setState({ movie: data.movie }))
      .catch(err => this.setState({error: err}))
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
              <h3>Runtime: {this.state.movie.runtime} minutes</h3>
              <h3>Year released: {movieYear}</h3>
              <h3>Genres: {movieGenres}</h3>
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
        {!this.state.movie && <NoMatch location={this.props.id} />}
        {this.state.error && <ErrorMessage />}
      </div>
    );
  }
}

export default SingleMovie;