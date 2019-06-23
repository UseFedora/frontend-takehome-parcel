import React, { Component } from "react";
import Result from "../components/Result";
import Favorites from "../components/Favorites";
import axios from "axios";

class SearchForm extends Component {
  state = {
    value: "",
    searchResults: [],
    savedGems: [],
    hideFavoriteResults: true
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
        this.props.fetchSaveResults(searchResults);
        return response;
      })
      .catch(error => {
        return error;
      });
  };

  saveOrUnsaveGems() {
    console.log("saveOrUnsaveGems");
  }

  toggleViewFavorites = () => {
    if (this.state.hideFavoriteResults === true) {
      this.setState({
        hideFavoriteResults: false
      });
    } else {
      this.setState({
        hideFavoriteResults: true
      });
    }
  };

  onFetchGemInfo = () => {
    console.log("lit");
  };

  render() {
    let { hideFavoriteResults, searchResults } = this.state;

    const displayFavorites =
      hideFavoriteResults === true ? (
        <button onClick={this.toggleViewFavorites}>Favorites</button>
      ) : (
        <div>
          <button onClick={this.toggleViewFavorites}>Close Favorites</button>
          <Favorites closeFavorites={this.onCloseFavorites} />
        </div>
      );
    const results = searchResults.map(gem => {
      return (
        <Result key={gem.sha} gem={gem} fetchGemInfo={this.onFetchGemInfo} />
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search..."
            id="search"
            name="Searcg"
          />
          <button type="submit" value="Submit">
            <i className="fa fa-search" />
          </button>
        </form>
        {displayFavorites}
        {results}
      </div>
    );
  }
}

export default SearchForm;
