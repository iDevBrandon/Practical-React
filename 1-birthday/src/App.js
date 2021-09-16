import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [person, SetPerson] = useState(data);

  const handleClick = () => {
    SetPerson([]);
  };
  return (
    <div className="container">
      <h3>{person.length} birthdays today</h3>
      <List data={person} />
      <button onClick={handleClick}>Clear All</button>
    </div>
  );
}

export default App;
