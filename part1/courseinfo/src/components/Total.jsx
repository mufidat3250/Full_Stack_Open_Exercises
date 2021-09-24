import React from "react";

const Total = (props) => {
  return (
    <p>
      Number of excercises{" "}
      {props.exercise[0].exercise +
        props.exercise[1].exercise +
        props.exercise[2].exercise}
    </p>
  );
};
export default Total;
