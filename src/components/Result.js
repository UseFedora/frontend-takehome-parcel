import React, { Component } from "react";

class Result extends Component {
  render() {
    let { gem, fetchGemInfo } = this.props;
    const anchorLink = {
      cursor: "pointer",
      textDecoration: "underline"
    };
    return (
      <p style={anchorLink} onClick={fetchGemInfo}>
        {gem.name}
      </p>
    );
  }
}

export default Result;
