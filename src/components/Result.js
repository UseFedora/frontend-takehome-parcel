import React, { Component } from "react";

class Result extends Component {
  state = {
    gemIsSaved: false,
    displayGemInfo: false
  };

  onSaveOrUnsave = () => {
    let { saveOrUnsave, gem } = this.props;
    if (this.state.gemIsSaved === false) {
      this.setState({
        gemIsSaved: true
      });
      saveOrUnsave(gem, true);
    } else {
      this.setState({
        gemIsSaved: false
      });
      saveOrUnsave(gem, false);
    }
  };

  fetchGemInfo = () => {
    let { displayGemInfo } = this.state;
    if (displayGemInfo === false) {
      this.setState({
        displayGemInfo: true
      });
    } else {
      this.setState({
        displayGemInfo: false
      });
    }
  };

  render() {
    let { gem } = this.props;
    let { gemIsSaved, displayGemInfo } = this.state;
    const anchorLink = {
      cursor: "pointer",
      textDecoration: "underline"
    };

    return (
      <div>
        <a href={gem.homepage_uri || gem.source_code_uri} target="_blank">
          <p style={anchorLink}>{gem.name}</p>
        </a>
        <button onClick={this.onSaveOrUnsave}>
          {gemIsSaved === false ? "Save" : "Unsave"}
        </button>
        {displayGemInfo === true ? (
          <button onClick={this.fetchGemInfo}>Close Details</button>
        ) : null}
      </div>
    );
  }
}

export default Result;
