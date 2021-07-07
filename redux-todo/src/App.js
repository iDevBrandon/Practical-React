import React from "react";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import Vehicle from "./components/Vehicle";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Vehicle /> */}
      <Todos />
    </div>
  );
}

export default App;
