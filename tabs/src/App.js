import { useState, useEffect } from "react";

import Job from "./components/Job";
import Tab from "./components/Tab";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const url = "https://randomuser.me/api";

  const getAllUsers = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  if (isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <div className="App">
      <h1 className="title">Experience</h1>
      <section className="jobs-center">
        <Tab />
        <Job
          jobs={jobs}
          title="Full Stack Web Developer"
          name="tommy"
          date="December 2015 - Present"
        />
        {jobs}
      </section>
    </div>
  );
}

export default App;
