import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h2>Accordion project setup</h2>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default App;
