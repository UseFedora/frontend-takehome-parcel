import React, { Component } from "react";

class Result extends Component {
  render() {
    let { gem, fetchGemInfo, saveOrUnsave, gemIsSaved } = this.props;
    const anchorLink = {
      cursor: "pointer",
      textDecoration: "underline"
    };
    return (
      <div>
        <p style={anchorLink} onClick={fetchGemInfo}>
          {gem.name}
        </p>
        <button onClick={saveOrUnsave}>
          {gemIsSaved === false ? "Save" : "Unsave"}
        </button>
      </div>
    );
  }
}

export default Result;
