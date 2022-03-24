import React, { Component } from 'react';
import fetchAPI from './APIcalls';
// import fetchAPI from './APIcalls';
// import movieData from './movieData';
import Header from './Header';
import Movies from './Movies';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  getAllMovies = () => {
    Promise.all([fetchAPI.fetchMovies()])
      .then((data) => {
        this.setState({ movies: data[0].movies });
      })
  }

  componentDidMount = () => this.getAllMovies()
  
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
