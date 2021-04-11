import React, { Component } from "react";

export default class JobDetails extends Component {
  render() {
    return (
      <div
        className="ui raised very padded text container segment"
        style={{ textAlign: "center", border: "1px solid gray" }}
      >
        <h2 className="ui header">{this.props.job?.name}</h2>
        <h5>
          {this.props.job?.location?.city},{this.props.job?.location?.country}
        </h5>
        <img alt="logo" src={this.props.job?.logo} className="job-post-image" />
        <p>{this.props.job?.description}</p>
        <div className="salary">{this.props.job?.salaryInString}</div>
      </div>
    );
  }
}
