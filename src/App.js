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
      filteredMovies: [],
      error: null,
    };
  }

  getAllMovies = () => {
    fetchMovieData()
      .then((data) => this.setState({ movies: data.movies }))
      .catch(err => this.setState({error: err}));
  }

  sortMovies = (movies, order) => {
    if (order === 'a-to-z') {
      return movies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'z-to-a') {
      return movies.sort((a,b) => b.title.localeCompare(a.title));
    } else if (order === 'ascending-rating') {
      return movies.sort((a, b) => a.average_rating - b.average_rating);
    } else if (order === 'descending-rating') {
      return movies.sort((a, b) => b.average_rating - a.average_rating);
    }
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





