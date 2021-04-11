import React, { useState } from "react";

function PersonalInformation() {
  const [personalInformation, setPersonalInformation] = useState(null);

  return (
    <div>
      <form className="ui form">
        <h4 className="ui dividing header">Personal Information </h4>
        <div className="two fields">
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) =>
                setPersonalInformation({
                  ...personalInformation,
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) =>
                setPersonalInformation({
                  ...personalInformation,
                  lastName: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="two fields">
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) =>
                setPersonalInformation({
                  ...personalInformation,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="field">
            <label>Mobile No.</label>
            <input
              type="text"
              placeholder="Mobile No."
              onChange={(e) =>
                setPersonalInformation({
                  ...personalInformation,
                  mobileNo: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="two fields">
          <div className="field">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              onChange={(e) =>
                setPersonalInformation({
                  ...personalInformation,
                  city: e.target.value,
                })
              }
            />
          </div>
          <div className="field">
            <label>Postal Code</label>
            <input
              type="text"
              placeholder="Postal Code"
              onChange={(e) =>
                setPersonalInformation({
                  ...personalInformation,
                  postalCode: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="field">
          <label>
            Describe your position and accomplishments as Full Stack Developer
          </label>
          <textarea
            rows="2"
            spellCheck="true"
            placeholder="Describe your position and accomplishments as Full Stack Developer"
            onChange={(e) =>
              setPersonalInformation({
                ...personalInformation,
                description: e.target.value,
              })
            }
          ></textarea>
        </div>
        <button className="ui button primary">Save</button>
      </form>
    </div>
  );
}

export default PersonalInformation;
