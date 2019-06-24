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
    let { displayGemInfo } = this.state;
    const anchorLink = {
      cursor: "pointer",
      textDecoration: "underline"
    };
    const buttonStyle = {
      padding: "0.5rem 0.5rem",
      fontSize: "0.8rem"
    };

    return (
      <div className="flex align-center">
        <a href={gem.homepage_uri || gem.source_code_uri} target="_blank">
          <p style={anchorLink}>{gem.name}</p>
        </a>
        <div style={buttonStyle} onClick={this.onSaveOrUnsave}>
          {localStorage[gem.name] === undefined ? (
            <i className="far fa-star fa-lg" />
          ) : (
            <i className="fa fa-star fa-lg" />
          )}
        </div>
        {displayGemInfo === true ? (
          <button style={buttonStyle} onClick={this.fetchGemInfo}>
            Close Details
          </button>
        ) : null}
      </div>
    );
  }
}

export default Result;
