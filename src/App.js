import { Component } from "react";
import "./App.css";
import JobBriefList from "./components/JobBriefList";
import SearchBarForLocation from "./components/SearchBarForLocation";
import SearchBarForName from "./components/SearchBarForName";
import Jobs from "./jobs.json";
import * as util from "./components/util/util";
import Profile from "./components/Profile";
import Route from "./components/Route";
import Loader from "./components/Loader"; 

class App extends Component {
  state = { filterJobs: Jobs, jobs: Jobs, selectedJob: null, loading: false };
  filterByName = (e) => {
    this.setState({ filterJobs: e });
    this.setState({ selectedJob: e[0] });
  };
  filterByLocation = (e) => {
    this.setState({ filterJobs: e });
    this.setState({ selectedJob: e[0] });
  };
  onJobClick = (e) => {
    this.setState({ selectedJob: e });
  };
  loaderStart() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }
  componentDidMount() {
    this.loaderStart();
    let selectedJob = {
      ...this.state.filterJobs[0],
      salaryInString: util.intToString(this.state.filterJobs[0].salary),
    };
    this.setState({ selectedJob: selectedJob });
  }
  render() {
    return (
      <div className="App ui container-fluid">
        {this.state.loading && (
          <div style={{ height: "100vh" }}>
            <Loader />
          </div>
        )}
        {!this.state.loading && (
          <>
            <Route path={"/"}>
              <div className="ui grid">
                <div className="sixteen wide column">
                  <div className="ui grid">
                    <div className="six wide column">
                      <SearchBarForName
                        jobs={Jobs}
                        onSearchBarForName={this.filterByName}
                      />
                    </div>
                    <div className="six wide column">
                      <SearchBarForLocation
                        jobs={Jobs}
                        onSearchBarForLocation={this.filterByLocation}
                      />
                    </div>
                    <div
                      className="four wide column"
                      style={{ margin: "auto" }}
                    >
                      <a className="ui button primary" href="/profile">
                        See Your Profile
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sixteen wide column">
                  <JobBriefList
                    jobList={this.state.filterJobs}
                    onClick={this.onJobClick}
                    selectedJob={this.state.selectedJob}
                  />
                </div>
              </div>
            </Route>
            <Route path={"/profile"}>
              <Profile />
            </Route>
          </>
        )}
      </div>
    );
  }
}

export default App;
