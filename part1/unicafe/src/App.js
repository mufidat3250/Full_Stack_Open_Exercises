import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const good_ = () => {
    setGood(good + 1);
  };

  return (
    <>
      <h1>give feedback</h1>
      <div className="btn">
        <Button onClick={good_} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
      </div>

      <h3>Statistics</h3>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  );
}

export default App;
