import React from "react";
import Part from "./Part";

function Content(props) {
  return (
    <div>
      <Part part_={props.list[0].name} exercise_={props.list[0].exercises} />
      <Part part_={props.list[1].name} exercise_={props.list[1].exercises} />
      <Part part_={props.list[2].name} exercise_={props.list[2].exercises} />
    </div>
  );
}

export default Content;
