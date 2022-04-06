import React, { Component } from 'react';
import './SortMenu.css';

class SortMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sort: 'a-to-z',
      filter: 'none'
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === 'sort') {
      this.props.updateRenderedMovies(e.target.value, '')
    } else if (e.target.name === 'filter') {
      this.props.updateRenderedMovies('', e.target.value)
    }
  }

  resetMenu = (e) => {
    e.preventDefault();
    this.setState({ sort: 'a-to-z', filter: 'none' });
    this.props.updateRenderedMovies('a-to-z', 'none');
  }

  render() {
    return (
      <form className='filter-menu'>
        <div className='sort-drop'>
          <label htmlFor='sort'>Sort:</label>
          <select
            name='sort'
            onChange={(e) => this.handleChange(e)}
            value={this.state.sort}
          >
            <option value='a-to-z'>Alphabetically (A-Z)</option>
            <option value='z-to-a'>Alphabetically (Z-A)</option>
            <option value='ascending-rating'>By Rating Ascending</option>
            <option value='descending-rating'>By Rating Descending</option>
          </select>
        </div>
        <div className='filter-drop'>
          <label htmlFor='filter'>Filter:</label>
          <select
            name='filter'
            onChange={(e) => this.handleChange(e)}
            value={this.state.filter}
          >
            <option value='none'>Show all ratings</option>
            <option value='above-5'>Ratings above 5</option>
            <option value='above-6'>Ratings above 6</option>
            <option value='above-7'>Ratings above 7</option>
          </select>
        </div>
        <button className='clear-button' onClick={(e) => this.resetMenu(e)}>Reset</button>
      </form>
    );
  }
}

export default SortMenu;



