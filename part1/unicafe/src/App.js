import React, { useState } from "react";
import Button from "./components/Button";
import Feedback from "./components/Feedback";

const All = (props) => {
  return (
    <p>
      {props.text} {props.all}
    </p>
  );
};
const Average = (props) => {
  return (
    <p>
      {props.text} {props.average}
    </p>
  );
};
const Positive = (props) => {
  return (
    <p>
      {props.text} {(props.value / props.all) * 100} %
    </p>
  );
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
      <h3>Statistics</h3>
      <Feedback value={good} text="good" />
      <Feedback value={neutral} text="neutral" />
      <Feedback value={bad} text="bad" />
      <All all={good + neutral + bad} text="all" />
      <Average average={(good + neutral + bad) / 3} text="average" />
      <Positive value={good} all={good + neutral + bad} text="positive" />
    </>
  );
}

export default App;
