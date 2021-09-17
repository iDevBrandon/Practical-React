import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import axios from "axios";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const filteredTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    try {
      setError(null);
      setTours(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(`${url}`);
      setTours(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2>Nothing left</h2>
        <button className="btn" onClick={() => fetchTours()}>
          refresh
        </button>{" "}
      </div>
    );
  } else {
    return (
      <main>
        <h2>Our Tours</h2>
        <section>
          <Tours tours={tours} filteredTours={filteredTours} />
        </section>
      </main>
    );
  }
}

export default App;
