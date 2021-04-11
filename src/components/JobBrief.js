import React, { Component } from "react";

export class JobBrief extends Component {
  state = {
    name: "",
    location: "",
    logo: "",
    description: "",
    salary: "",
    city: "",
    loading: false,
  };
  loaderStart() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 5000);
  }
  componentDidMount() {
    let { name, location, logo, description, salaryInString } = this.props;
    this.setState({
      name,
      location,
      logo,
      description,
      salaryInString,
    });

    this.loaderStart();
  }
  onClickJob = (event) => {
    this.props.onClick(this.state);
  };
  render() {
    return (
      <>
        {/*   {this.state.loading && <Loader />} */}
        {/*  {!this.state.loading && ( */}
        <div
          style={{ textAlign: "left", padding: "5px" }}
          className="job-brief"
          onClick={this.onClickJob}
        >
          <h4>{this.props.name}</h4>
          <h5>
            {this.props.location?.city},{this.props.location?.country}
          </h5>
          <img alt="logo" src={this.props.logo} className="job-post-image" />
          <p>{this.props.description}</p>
          <div className="salary">Salary: {this.props.salaryInString}</div>

          <hr />
        </div>
        {/*    )} */}
      </>
    );
  }
}

export default JobBrief;
