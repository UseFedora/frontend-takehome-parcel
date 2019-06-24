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

    // const displayText = () => {
    //   if (displayGemInfo === false) {
    //     return <p>{gem.name}</p>;
    //   } else {
    //     for (let prop in gem) {
    //       if (prop !== "name") {
    //         return (
    //           <p>
    //             {prop}: {gem[prop]}
    //           </p>
    //         );
    //       }
    //     }
    //   }
    // };

    return (
      <div>
        <p style={anchorLink} onClick={this.fetchGemInfo}>
          {gem.name}
        </p>
        <p>{displayGemInfo === true ? "Gem Details" : null}</p>
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
