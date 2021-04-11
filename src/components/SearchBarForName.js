import React, { useEffect, useRef, useState } from "react";
const SearchBarForName = (props) => {
  const [term, setTerm] = useState("");
  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  }, []);
  const onFormSubmit = (event) => {
    event.preventDefault();
    let filterList = [];
    if (term) {
      filterList = props.jobs.filter((f) => {
        if (f.name.toString().toLowerCase().match(term.toString().toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      filterList = props.jobs;
    }
    props.onSearchBarForName(filterList);
  };
  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>What:</label>
          <input
            ref={textInput}
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Job title,keywords or company"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBarForName;
