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

  focusViewOn = (id) => this.setState({ singleMovieView: id });

  focusViewOff = () => this.setState({singleMovieView: null});

  render() {
    return (
      <div>
        <Header />
        <main>
          <Movies movies={this.state.movies} focusViewOn={this.focusViewOn} />
        </main>
      </div>
    );
  }
}

export default App;
