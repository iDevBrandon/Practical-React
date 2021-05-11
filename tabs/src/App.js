import Job from "./components/Job";
import Tab from "./components/Tab";

function App() {
  return (
    <div className="App">
      <h1 className="title">Experience</h1>
      <section className="jobs-center">
        <Tab />
        <Job
          title="Full Stack Web Developer"
          name="tommy"
          date="December 2015 - Present"
        />
      </section>
    </div>
  );
}

export default App;
