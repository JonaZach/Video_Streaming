import React from "react";

import "../styles/SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment" id="searchBar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label style={{ fontSize: "20px" }}>JZ Search</label>
            <input
              placeholder="In memory of Kobe Bryant"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
