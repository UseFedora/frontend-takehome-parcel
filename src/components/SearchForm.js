import React, { Component } from "react";
import axios from "axios";

class SearchForm extends Component {
  state = {
    value: "",
    searchResults: []
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .get(`http://localhost:3000/api/v1/search.json?query=${this.state.value}`)
      .then(response => {
        this.setState({
          searchResults: response.data
        });
        return response;
      })
      .catch(error => {
        return error;
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;
