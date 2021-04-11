import React, { useState } from "react";
import Dropdown from "./Dropdown";

function WorkExperience() {
  const getYearsOptions = () => {
    let options = [];

    let currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 2010; i--) {
      options.push({ label: i, value: i });
    }
    return options;
  };
  const [isShow, setIsShow] = useState(true);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthOptions = months.map((m) => {
    return { label: m, value: m };
  });
  const yearOptions = getYearsOptions();
  const initialWorkExperience = {
    jobTitle: "",
    company: "",
    location: "",
    fromMonth: monthOptions[0],
    fromYear: yearOptions[0],
    toMonth: monthOptions[0],
    toYear: yearOptions[0],
  };

  const [workExperience, setWorkExperience] = useState(initialWorkExperience);
  const [workExperienceList, setWorkExperienceList] = useState([]);
  const onSubmitData = (e) => {
    e.preventDefault();

    setWorkExperienceList([...workExperienceList, workExperience]);
    setWorkExperience(initialWorkExperience);
  };
  const removeWorkExperience = (data) => {
    setWorkExperienceList(
      workExperienceList.filter((f) => f.jobTitle !== data.jobTitle)
    );
  };
  const renderWorkExperienceList = workExperienceList.map(
    (workExperienceItem) => {
      return (
        <div className="item" key={workExperienceItem.jobTitle}>
          <div className="content">
            <h4 className="header">{workExperienceItem.jobTitle}</h4>
            <div className="description">
              <p>{workExperienceItem.company}</p>
              <p>{workExperienceItem.location}</p>
              <p>{`${workExperienceItem.fromMonth.value} ${workExperienceItem.fromYear.value} ${workExperienceItem.toMonth.value} ${workExperienceItem.toYear.value}`}</p>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="ui button red"
              onClick={() => {
                removeWorkExperience(workExperienceItem);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      );
    }
  );
  return (
    <div>
      <form className="ui form" onSubmit={onSubmitData}>
        <h4 className="ui dividing header">
          Work Experience
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
              <label>Job title</label>
              <input
                type="text"
                placeholder="job title"
                onChange={(e) => {
                  setWorkExperience({
                    ...workExperience,
                    jobTitle: e.target.value,
                  });
                }}
              />
            </div>
            <div className="field">
              <label>Company</label>
              <input
                type="text"
                placeholder="Company"
                onChange={(e) => {
                  setWorkExperience({
                    ...workExperience,
                    company: e.target.value,
                  });
                }}
              />
            </div>
            <div className="field">
              <label>Location</label>
              <input
                type="text"
                placeholder="Location"
                onChange={(e) => {
                  setWorkExperience({
                    ...workExperience,
                    location: e.target.value,
                  });
                }}
              />
            </div>
            <div className="field">
              <div className="eight wide field">
                <label>From</label>
                <div className="two fields">
                  <Dropdown
                    label=""
                    options={monthOptions}
                    selected={workExperience?.fromMonth}
                    onSelectedChange={(data) => {
                      setWorkExperience({
                        ...workExperience,
                        fromMonth: data,
                      });
                    }}
                  />

                  <Dropdown
                    label=""
                    options={yearOptions}
                    selected={workExperience.fromYear}
                    onSelectedChange={(data) => {
                      setWorkExperience({
                        ...workExperience,
                        fromYear: data,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="eight wide field">
              <label>To</label>
              <div className="two fields">
                <Dropdown
                  label=""
                  options={monthOptions}
                  selected={workExperience.toMonth}
                  onSelectedChange={(value) => {
                    setWorkExperience({ ...workExperience, toMonth: value });
                  }}
                />

                <Dropdown
                  label=""
                  options={yearOptions}
                  selected={workExperience.toYear}
                  onSelectedChange={(value) => {
                    setWorkExperience({ ...workExperience, toYear: value });
                  }}
                />
              </div>
            </div>

            <button className="ui button primary" type="submit">
              Submit
            </button>
          </React.Fragment>
        )}
      </form>

      <div className="ui items">{renderWorkExperienceList}</div>
    </div>
  );
}

export default WorkExperience;
