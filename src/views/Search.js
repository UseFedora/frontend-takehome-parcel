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
    hideFavoriteResults: true,
    notInSearchQuery: false
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
        if (response.data.length === 0) {
          this.setState({
            notInSearchQuery: true
          });
        } else {
          this.setState({
            searchResults: response.data,
            notInSearchQuery: false
          });
          this.props.fetchSaveResults(searchResults);
        }
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

  saveOrUnsave = (gem, currentSaveState) => {
    if (currentSaveState === true) {
      localStorage.setItem(gem.name, JSON.stringify(gem));
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

  componentDidMount = () => {
    for (let prop in localStorage) {
      if (
        prop !== "length" &&
        prop !== "getItem" &&
        prop !== "setItem" &&
        prop !== "removeItem" &&
        prop !== "clear" &&
        prop !== "key"
      ) {
        this.setState(prevState => ({
          savedGems: [...prevState.savedGems, JSON.parse(localStorage[prop])]
        }));
      }
    }
  };

  render() {
    let {
      hideFavoriteResults,
      searchResults,
      savedGems,
      notInSearchQuery
    } = this.state;

    const displayFavorites =
      hideFavoriteResults === true ? (
        <button onClick={this.toggleViewFavorites}>
          Saved Gems <i className="fa fa-star fa-1x" />
        </button>
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
          saveOrUnsave={this.saveOrUnsave}
          savedGems={savedGems}
          saveOrUnsave={this.saveOrUnsave}
        />
      );
    });

    const formStyle = {
      marginBottom: "15px"
    };
    const submitButtonStyle = {
      borderLeft: 0
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
          <button style={submitButtonStyle} type="submit" value="Submit">
            <i className="fa fa-search" />
          </button>
        </form>
        {displayFavorites}
        {results.length > 0 ? <h2>Results</h2> : null}
        {notInSearchQuery === false ? (
          results
        ) : (
          <p>Gem not found, please search again</p>
        )}
      </div>
    );
  }
}

export default SearchForm;
