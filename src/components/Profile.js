import React, { Component } from "react";
import Education from "./Education";
import PersonalInformation from "./PersonalInformation";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

export class Profile extends Component {
  render() {
    return (
      <div>
        <PersonalInformation />
        <br />
        <WorkExperience />
        <br />
        <Education />
        <br />
        <Skills />
        <br />
      </div>
    );
  }
}

export default Profile;
