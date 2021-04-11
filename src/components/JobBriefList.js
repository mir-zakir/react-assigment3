import React, {useEffect, useState } from "react";
import * as util from "./util/util";
import JobBrief from "./JobBrief";
import JobDetails from "./JobDetails";
import Loader from "./Loader";

const JobBriefList = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="ui grid">
      <div
        className="five wide column"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        {loading && <Loader />}
        {!loading &&
          props.jobList.map((job, index) => (
            <JobBrief
              key={index}
              name={job.name}
              salary={job.salary}
              salaryInString={util.intToString(job.salary)}
              description={job.description}
              logo={job.logo}
              location={job.location}
              onClick={props.onClick}
            />
          ))}
      </div>
      <div className="one wide column"></div>
      <div className="nine wide column">
        {props.selectedJob && <JobDetails job={props.selectedJob} />}
      </div>
    </div>
  );
};

export default JobBriefList;
