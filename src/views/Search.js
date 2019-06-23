import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import Result from "../components/Result";
import Favorites from "../components/Favorites";

class Search extends Component {
  state = {
    savedGems: [],
    hideFavoriteResults: true
  };

  saveOrUnsaveGems() {
    console.log("saveOrUnsaveGems");
  }

  onFavoritesClick = () => {
    this.setState({
      hideFavoriteResults: false
    });
  };

  onCloseFavorites = () => {
    this.setState({
      hideFavoriteResults: true
    });
  };

  render() {
    return (
      <div>
        <SearchForm />
        <Result />
        {this.state.hideFavoriteResults === true ? (
          <button onClick={this.onFavoritesClick}>Favorites</button>
        ) : (
          <Favorites closeFavorites={this.onCloseFavorites} />
        )}
      </div>
    );
  }
}

export default Search;
