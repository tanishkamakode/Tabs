const url = "https://course-api.com/react-tabs-project";
import { useState, useEffect } from "react";
import JobInfo from "./JobInfo";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const repsonse = await fetch(url);
    const newJobs = await repsonse.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <JobInfo jobs={jobs} />
    </section>
  );
};
export default App;
