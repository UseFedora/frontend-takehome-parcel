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

  // onCloseFavorites = () => {
  //   this.setState({
  //     hideFavoriteResults: true
  //   });
  // };

  render() {
    return (
      <div>
        <SearchForm />
        <Result />
        {this.state.hideFavoriteResults === true ? (
          <button onClick={this.toggleViewFavorites}>Favorites</button>
        ) : (
          <div>
            <button onClick={this.toggleViewFavorites}>Close Favorites</button>
            <Favorites closeFavorites={this.onCloseFavorites} />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
