import React, { Component } from 'react';
import movieData from './movieData';
import Header from './Header';
import Movies from './Movies';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <Movies movies={this.state.movies}/>
        </main>
      </div>
    );
  }
}

export default App;
