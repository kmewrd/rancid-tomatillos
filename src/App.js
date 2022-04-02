import React, { Component } from 'react';
import fetchMovieData from './APIcalls';
import Header from './Header';
import Movies from './Movies';
import SingleMovie from './SingleMovie';
import ErrorMessage from './ErrorMessage';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: null,
    };
  }

  getAllMovies = () => {
    fetchMovieData()
      .then((data) => this.setState({ movies: data.movies }))
      .catch(err => this.setState({error: err}));
  }

  componentDidMount = () => this.getAllMovies();

  render() {
    return (
      <div>
        <Header />
        <main>
          <Route exact path='/' render={() => <Movies movies={this.state.movies} />} />
          <Route exact path='/:id' render={({ match }) => <SingleMovie id={match.params.id} />} />
          {this.state.error && <ErrorMessage />}
        </main>
      </div>
    );
  }
}

export default App;

