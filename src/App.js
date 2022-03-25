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
    };
  }

  getAllMovies = () => {
    Promise.all([fetchAPI.fetchMovies()])
      .then((data) => {
        this.setState({ movies: data[0].movies });
      })
  }

  componentDidMount = () => this.getAllMovies()
  
  focusViewOn = (id) => this.setState({ singleMovieView: id });

  focusViewOff = () => this.setState({singleMovieView: null});

  render() {
    return (
      <div>
        <Header />
        <main>
          {this.state.singleMovieView && <SingleMovie focusViewOff={this.focusViewOff} />}
          <Movies movies={this.state.movies} focusViewOn={this.focusViewOn} />
        </main>
      </div>
    );
  }
}

export default App;
