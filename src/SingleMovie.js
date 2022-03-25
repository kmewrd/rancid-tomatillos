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
      movieDetails =
        <div>
          <h1>{this.state.movie.title}</h1>
          <img src={this.state.movie.backdrop_path} alt='' />
          <h2>Rating: {this.state.movie.average_rating.toFixed(1)}</h2>
          <h3>{this.state.movie.release_date}</h3>
          <p>{this.state.movie.overview}</p>
          <button onClick={this.props.focusViewOff}>Return to main</button>
        </div>
    }

    return (
      <div>
        {!this.state.movie ? <p>Sorry, please try again later.</p> : movieDetails}
      </div>
    );
  }
}

export default SingleMovie