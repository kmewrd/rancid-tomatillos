import React, { Component } from 'react';
import './SingleMovie.css';

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    }
  }

  render() {
    return (
      <div>
        <h1>Fake Movie Title</h1>
        <img src="https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg" />
        <h2>Average Rating: 6</h2>
        <h3>2019</h3>
        <p>
          Some overview that is full of buzzwords to attempt to entice you to
          watch this movie! Explosions! Drama! True love! Robots! A cute dog!
        </p>
        <button onClick={this.props.focusViewOff}>Return to main</button>
      </div>
    );
  }
}

export default SingleMovie