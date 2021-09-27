import React, { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const Heading2 = () => {
  return <h1>Statistics</h1>;
};

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
      <Heading2 />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
