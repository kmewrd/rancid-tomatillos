import React, { Component } from 'react';
import fetchMovieData from './APIcalls';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import SingleMovie from './components/SingleMovie/SingleMovie';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import './App.css';
import './mediaQueries.css';
import { Route } from 'react-router-dom';
import ReactLoading from 'react-loading';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      sortFrom: 'a-to-z',
      filterBy: 'none',
      error: null,
      isLoading: true
    };
  }

  getAllMovies = () => {
    fetchMovieData()
      .then((data) => {
        this.setState({ movies: data.movies, isLoading: false });
      })
      .catch((err) => this.setState({ error: err, isLoading: false }));
  };

  updateRenderedMovies = (order, filter) => {
    if (order && !filter) {
      this.setState({ sortFrom: order })
    } else if (filter && !order) {
      this.setState({ filterBy: filter })
    } else if (filter && order) {
      this.setState({ sortFrom: order, filterBy: filter })
    }
  };

  componentDidMount = () => this.getAllMovies();

  render() {
    return (
      <div>
        <Header updateRenderedMovies={this.updateRenderedMovies} />
        <main>
          {this.state.isLoading && <ReactLoading type='bubbles' color='#fff' height={'20%'} width={'20%'} />}
          <Route exact path='/' render={() => <Movies movies={this.state.movies} sortFrom={this.state.sortFrom} filterBy={this.state.filterBy} />} />
          <Route exact path='/:id' render={({ match }) => <SingleMovie id={match.params.id} />} />
          {this.state.error && <ErrorMessage />}
        </main>
      </div>
    );
  }
}

export default App;





