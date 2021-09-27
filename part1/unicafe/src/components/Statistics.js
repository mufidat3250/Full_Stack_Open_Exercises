import React from "react";
import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const percentage = (good / total) * 100;
  const average = (good - bad) / total;
  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <Statistic value={good} text="good" />
      <Statistic value={neutral} text="neutral" />
      <Statistic value={bad} text="bad" />
      <Statistic value={total} text="all" />
      <Statistic value={average.toFixed(1)} text="average" />
      <Statistic value={percentage.toFixed(2) + "%"} text="positive" />
    </>
  );
};

export default Statistics;
