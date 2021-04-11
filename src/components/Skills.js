import { render } from "@testing-library/react";
import React, { useState } from "react";
import Dropdown from "./Dropdown";

function Skills() {
  const [isShow, setIsShow] = useState(true);
  const initialSkills = {
    skillName: "",
    rating: 0,
  };

  const [skill, setSkill] = useState(initialSkills);
  const [skills, setSkills] = useState([]);
  const onSubmitData = (e) => {
    e.preventDefault();

    setSkills([...skills, skill]);
    setSkill(initialSkills);
  };
  const removeSkills = (data) => {
    setSkills(skills.filter((f) => f.skillName !== data.skillName));
  };
  const renderSkills = skills.map((skill) => {
    return (
      <div className="item" key={skill.skillName}>
        <div className="content">
          <h4 className="header">{skill.skillName}</h4>
          <div className="description">
            <p>Rating : {skill.rating} / 10</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="ui button red"
            onClick={() => {
              removeSkills(skill);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  });
  return (
    <div>
      <form className="ui form" onSubmit={onSubmitData}>
        <h4 className="ui dividing header">
          Skills
          <button
            type="button"
            className="ui right floated primary button"
            onClick={(e) => setIsShow(!isShow)}
          >
            {isShow ? "show" : "hide"}
          </button>
        </h4>
        {!isShow && (
          <React.Fragment>
            <div className="field">
              <label>Skill / Technology Name</label>
              <input
                type="text"
                placeholder="Enter skill / technology name"
                onChange={(e) => {
                  setSkill({
                    ...skill,
                    skillName: e.target.value,
                  });
                }}
              />
            </div>
            <div className="field">
              <label>Rating out of 10</label>
              <input
                type="number"
                placeholder="Rating out of 10"
                onChange={(e) => {
                  setSkill({
                    ...skill,
                    rating: e.target.value,
                  });
                }}
              />
            </div>

            <button className="ui button primary" type="submit">
              Submit
            </button>
          </React.Fragment>
        )}
      </form>

      <div className="ui items">{renderSkills}</div>
    </div>
  );
}

export default Skills;
