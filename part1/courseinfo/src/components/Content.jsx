import React from "react";
import Part from "./Part";

function Content(props) {
  return (
    <div>
      <Part part_={props.list1.name} exercise_={props.list1.exercises} />
      <Part part_={props.list2.name} exercise_={props.list2.exercises} />
      <Part part_={props.list3.name} exercise_={props.list3.exercises} />
    </div>
  );
}

export default Content;
