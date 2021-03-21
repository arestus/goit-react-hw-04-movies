import React, { Component } from 'react';

class SearchBar extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Search</button>

        <input
          type="text"
          autoComplete="off"
          value={this.state.query}
          onChange={this.handleChange}
          autoFocus
          placeholder="Search movies"
        />
      </form>
    );
  }
}

export default SearchBar;
