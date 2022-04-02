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
            <option value="a-to-z" >Alphabetically (A-Z)</option>
            <option value="z-to-a" >Alphabetically (Z-A)</option>
            <option value="ascending-rating" >By Rating Ascending</option>
            <option value="descending-rating" >By Rating Descending</option>
          </select>
      </form>
    );
  }
}

export default SortMenu



