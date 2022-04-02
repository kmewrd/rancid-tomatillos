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
      sortedMovies: [],
      filteredMovies: [],
      error: null,
    };
  }

  getAllMovies = () => {
    fetchMovieData()
      .then((data) => {
        let movies = this.sortMovies(data.movies, 'a-to-z');
        this.setState({ sortedMovies: movies, filteredMovies: movies });
      })
      .catch((err) => this.setState({ error: err }));
  };

  sortMovies = (movies, order) => {
    if (order === 'a-to-z') {
      return movies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'z-to-a') {
      return movies.sort((a, b) => b.title.localeCompare(a.title));
    } else if (order === 'ascending-rating') {
      return movies.sort((a, b) => a.average_rating - b.average_rating);
    } else if (order === 'descending-rating') {
      return movies.sort((a, b) => b.average_rating - a.average_rating);
    } else {
      return movies;
    }
  };

  filterMovies = (movies, filter) => {
    if (filter === 'above-6') {
      return movies.filter(movie => movie.average_rating > 6);
    } else if (filter === 'above-7') {
      return movies.filter(movie => movie.average_rating > 7);
    } else if (filter === 'above-8') {
      return movies.filter(movie => movie.average_rating > 8);
    } else if (filter === 'above-9') {
      return movies.filter(movie => movie.average_rating > 9);
    } else {
      return movies;
    }
  };

  updateRenderedMovies = (order, filter) => {
    if (order && !filter) {
      this.changeSortCriteria(order);
    } else if (filter && !order) {
      this.changeFilterCriteria(filter);
    }
  };

  changeSortCriteria = (order) => {
    let movies = [...this.state.filteredMovies];

    this.setState({
      sortedMovies: this.sortMovies(movies, order),
      filteredMovies: this.sortMovies(movies, order)
    });
  };

  changeFilterCriteria = filter => {
    let movies = [...this.state.sortedMovies];
    let filtered = this.filterMovies(movies, filter);

    this.setState({ filteredMovies: filtered });
  };

  componentDidMount = () => this.getAllMovies();

  render() {
    return (
      <div>
        <Header updateRenderedMovies={this.updateRenderedMovies} />
        <main>
          <Route exact path="/" render={() => <Movies movies={this.state.filteredMovies} />} />
          <Route exact path="/:id" render={({ match }) => <SingleMovie id={match.params.id} />} />
          {this.state.error && <ErrorMessage />}
        </main>
      </div>
    );
  }
}

export default App;





