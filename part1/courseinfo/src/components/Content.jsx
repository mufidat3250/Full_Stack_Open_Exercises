import React from "react";
import Part from "./Part";

function Content(props) {
  return (
    <div>
      <Part part_={props.list[0].part} exercise_={props.list[0].exercise} />
      <Part part_={props.list[1].part} exercise_={props.list[1].exercise} />
      <Part part_={props.list[2].part} exercise_={props.list[2].exercise} />
    </div>
  );
}

export default Content;
