import React, { useState } from "react";
import Dropdown from "./Dropdown";

function Education() {
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
  const initialEducation = {
    degree: "",
    college: "",
    location: "",
    fromMonth: monthOptions[0],
    fromYear: yearOptions[0],
    toMonth: monthOptions[0],
    toYear: yearOptions[0],
  };

  const [education, setEducation] = useState(initialEducation);
  const [educationList, setEducationList] = useState([]);
  const onSubmitData = (e) => {
    e.preventDefault();

    setEducationList([...educationList, education]);
    setEducation(initialEducation);
  };
  const removeWorkExperience = (data) => {
    setEducationList(educationList.filter((f) => f.degree !== data.degree));
  };
  const renderWorkExperienceList = educationList.map((workExperienceItem) => {
    return (
      <div className="item" key={workExperienceItem.degree}>
        <div className="content">
          <h4 className="header">{workExperienceItem.degree}</h4>
          <div className="description">
            <p>{workExperienceItem.college}</p>
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
  });
  return (
    <div>
      <form className="ui form" onSubmit={onSubmitData}>
        <h4 className="ui dividing header">
          Education
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
              <label>Degree</label>
              <input
                type="text"
                placeholder="Degree"
                onChange={(e) => {
                  setEducation({
                    ...education,
                    degree: e.target.value,
                  });
                }}
              />
            </div>
            <div className="field">
              <label>College</label>
              <input
                type="text"
                placeholder="College"
                onChange={(e) => {
                  setEducation({
                    ...education,
                    college: e.target.value,
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
                  setEducation({
                    ...education,
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
                    selected={education?.fromMonth}
                    onSelectedChange={(data) => {
                      setEducation({
                        ...education,
                        fromMonth: data,
                      });
                    }}
                  />

                  <Dropdown
                    label=""
                    options={yearOptions}
                    selected={education.fromYear}
                    onSelectedChange={(data) => {
                      setEducation({
                        ...education,
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
                  selected={education.toMonth}
                  onSelectedChange={(value) => {
                    setEducation({ ...education, toMonth: value });
                  }}
                />

                <Dropdown
                  label=""
                  options={yearOptions}
                  selected={education.toYear}
                  onSelectedChange={(value) => {
                    setEducation({ ...education, toYear: value });
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

export default Education;
