import React, { Component } from "react";
import Result from "../components/Result";
import Favorites from "../components/Favorites";
import SearchHeadings from "../components/SearchHeadings";
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

  fetchGemInfo = () => {
    console.log("lit");
  };

  saveOrUnsave = (gem, currentSaveState) => {
    if (currentSaveState === true) {
      localStorage.setItem(gem.name, gem.name);
      this.setState(prevState => ({
        savedGems: [...prevState.savedGems, gem]
      }));
    } else {
      localStorage.removeItem(gem.name);
      this.setState(prevState => ({
        savedGems: [...prevState.savedGems.filter(savedGem => savedGem !== gem)]
      }));
    }
  };

  render() {
    let { hideFavoriteResults, searchResults, savedGems } = this.state;

    const displayFavorites =
      hideFavoriteResults === true ? (
        <button onClick={this.toggleViewFavorites}>Saved Gems</button>
      ) : (
        <div>
          <button onClick={this.toggleViewFavorites}>Close</button>
          <Favorites
            closeFavorites={this.onCloseFavorites}
            savedGems={savedGems}
          />
        </div>
      );
    const results = searchResults.map(gem => {
      return (
        <Result
          key={gem.sha}
          gem={gem}
          fetchGemInfo={this.fetchGemInfo}
          saveOrUnsave={this.saveOrUnsave}
          savedGems={savedGems}
          saveOrUnsave={this.saveOrUnsave}
        />
      );
    });

    const formStyle = {
      marginBottom: "15px"
    };

    return (
      <div>
        <SearchHeadings />
        <form style={formStyle} onSubmit={this.handleSubmit}>
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
        {results.length > 0 ? <h3>Results</h3> : null}
        {results}
      </div>
    );
  }
}

export default SearchForm;
