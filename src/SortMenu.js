import React, { Component } from "react";
import './SortMenu.css';

class SortMenu extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render() {
    return (
      <form>
        <label for="sort">Sort:</label>
        <select name="sort">
          <option value="a-to-z">Alphabetically (A-Z)</option>
          <option value="z-to-a">Alphabetically (Z-A)</option>
          <option value="ascending-rating">By Rating Ascending</option>
          <option value="descending-rating">By Rating Descending</option>
        </select>
        <label for="filter">Filter:</label>
        <select name="filter" >
          <option value="" disabled selected>Please select an option</option>
          <option value="above-6" >Ratings above 6</option>
          <option value="above-7" >Ratings above 7</option>
          <option value="above-8" >Ratings above 8</option>
          <option value="above-9" >Ratings above 9</option>
        </select>
      </form>
    );
  }
}

export default SortMenu



