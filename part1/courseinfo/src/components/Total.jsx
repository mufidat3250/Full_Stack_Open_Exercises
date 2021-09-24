import React from "react";

const Total = (props) => {
  return (
    <p>
      Number of excercises
      {props.exercise[0].exercises +
        props.exercise[1].exercises +
        props.exercise[2].exercises}
    </p>
  );
};
export default Total;
