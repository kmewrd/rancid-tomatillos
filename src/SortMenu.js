import React, { Component } from "react";
import './SortMenu.css';

class SortMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sort: "a-to-z",
      filter: ""
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === 'sort') {
      this.props.updateRenderedMovies(e.target.value, '')
      console.log('sort')
    } else if (e.target.name === 'filter') {
      this.props.updateRenderedMovies('', e.target.value)
      console.log('filter')
    }
  }

  render() {
    return (
      <form>
        <label htmlFor="sort">Sort:</label>
        <select name="sort" onChange={(e) => this.handleChange(e)}>
          <option value="a-to-z">Alphabetically (A-Z)</option>
          <option value="z-to-a">Alphabetically (Z-A)</option>
          <option value="ascending-rating">By Rating Ascending</option>
          <option value="descending-rating">By Rating Descending</option>
        </select>
        <label htmlFor="filter">Filter:</label>
        <select name="filter" onChange={(e) => this.handleChange(e) }>
          <option value="" >
            Show all ratings
          </option>
          <option value="above-6">Ratings above 6</option>
          <option value="above-7">Ratings above 7</option>
          <option value="above-8">Ratings above 8</option>
          <option value="above-9">Ratings above 9</option>
        </select>
      </form>
    );
  }
}

export default SortMenu



