import React, { Component } from "react";

export class Loader extends Component {
  render() {
    return (
      <div className="ui segment" style={{ height: "100%", width: "100%" }}>
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );
  }
}

export default Loader;
