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

  render() {
    return (
      <div>
        <SearchForm />
        <Result />
        {this.state.hideFavoriteResults === true ? (
          <button>Favorites</button>
        ) : (
          <Favorites />
        )}
      </div>
    );
  }
}

export default Search;
