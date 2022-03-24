import React, { Component } from 'react';
import movieData from './movieData';
import Header from './Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
