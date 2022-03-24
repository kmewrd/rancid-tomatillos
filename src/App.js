import React, { Component } from 'react';
import movieData from './movieData';
import Header from './Header';
import Movies from './Movies';
import SingleMovie from './SingleMovie';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      singleMovieView: null,
    };
  }

  toggleFocusView = (id) => this.setState({ singleMovieView: id });

  render() {
    return (
      <div>
        <Header />
        <main>
          {this}
          <Movies movies={this.state.movies} toggleFocusView={this.toggleFocusView} />
        </main>
      </div>
    );
  }
}

export default App;
