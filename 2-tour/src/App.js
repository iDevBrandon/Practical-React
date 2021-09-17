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

  useEffect(() => {
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
    fetchTours();
  }, []);

  console.log(tours);

  return (
    <main>
      <h2>Our Tours</h2>
      <section>{tours ? <Tours tours={tours} /> : <Loading />}</section>
    </main>
  );
}

export default App;
