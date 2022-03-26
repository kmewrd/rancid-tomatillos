import React, { Component } from 'react';
import fetchAPI from './APIcalls';
import Header from './Header';
import Movies from './Movies';
import SingleMovie from './SingleMovie';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovieView: null,
      error: null,
    };
  }

  getAllMovies = () => {
    fetchAPI.fetchMovies()
      .then((data) => {
        this.setState({ movies: data.movies });
      }).catch(err => this.setState({error: err}))
  }

  componentDidMount = () => this.getAllMovies();
  
  focusViewOn = (id) => this.setState({ singleMovieView: id });

  focusViewOff = () => this.setState({ singleMovieView: null });

  render() {
    return (
      <div>
        <Header />
        <main>
          {this.state.error && <p className="error-message" >Sorry, something went wrong. Please try again later.</p>}
          {this.state.singleMovieView ? <SingleMovie id={this.state.singleMovieView} focusViewOff={this.focusViewOff} /> : <Movies movies={this.state.movies} focusViewOn={this.focusViewOn} />}
        </main>
      </div>
    );
  }
}

export default App;
