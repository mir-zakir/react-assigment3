import React, { useState } from "react";

const SearchBarForLocation = (props) => {
  const [term, setTerm] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    let filterList = [];
    if (term) {
      filterList = props.jobs.filter((f) => {
        if (
          f.location.city
            .toString()
            .toLowerCase()
            .match(term.toString().toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      filterList = props.jobs;
    }
    props.onSearchBarForLocation(filterList);
  };
  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Where:</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Enter City"
          />
        </div>
      </form>
    </div>
  );
};
export default SearchBarForLocation;
