import React, { Component } from "react";

class Result extends Component {
  state = {
    gemIsSaved: false
  };

  onSaveorUnsave = () => {
    let { saveOrUnsave, gem } = this.props;
    if (this.state.gemIsSaved === false) {
      saveOrUnsave(gem);
      this.setState({
        gemIsSaved: true
      });
    } else {
      this.setState({
        gemIsSaved: false
      });
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
        <button onClick={this.onSaveorUnsave}>
          {gemIsSaved === false ? "Save" : "Unsave"}
        </button>
      </div>
    );
  }
}

export default Result;
