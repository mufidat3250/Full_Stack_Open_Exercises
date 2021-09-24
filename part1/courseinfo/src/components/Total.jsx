import React from "react";

const Total = (props) => {
  return (
    <p>
      Number of excercises{" "}
      {props.list1.exercises + props.list2.exercises + props.list3.exercises}
    </p>
  );
};
export default Total;
