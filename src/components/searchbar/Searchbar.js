import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  handleInput = (e) => {
    this.setState({ query: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };
  render() {
    const { query } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={query}
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}
