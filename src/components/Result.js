import React, { Component } from "react";

class Result extends Component {
  state = {
    gemIsSaved: false
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

  render() {
    let { gem, fetchGemInfo } = this.props;
    let { gemIsSaved } = this.state;
    const anchorLink = {
      cursor: "pointer",
      textDecoration: "underline"
    };
    return (
      <div>
        <p style={anchorLink} onClick={fetchGemInfo}>
          {gem.name}
        </p>
        <button onClick={this.onSaveOrUnsave}>
          {gemIsSaved === false ? "Save" : "Unsave"}
        </button>
      </div>
    );
  }
}

export default Result;
