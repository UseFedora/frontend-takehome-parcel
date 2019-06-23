import React, { Component } from "react";

class Result extends Component {
  state = {
    gemIsSaved: false
  };

  saveOrUnsave = () => {
    this.state.gemIsSaved === false
      ? this.setState({
          gemIsSaved: true
        })
      : this.setState({
          gemIsSaved: false
        });
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
        <button onClick={this.saveOrUnsave}>
          {gemIsSaved === false ? "Save" : "Unsave"}
        </button>
      </div>
    );
  }
}

export default Result;
