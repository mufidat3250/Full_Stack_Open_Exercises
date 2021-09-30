import React from "react";
import Header from "./Header";
import Part from "./Part";

function Course(props) {
  const { name, parts } = props.course;
  return (
    <>
      <Header name={name} />
      <div>
        {parts.map((part) => {
          console.log(part);
          const { name, exercises, id } = part;
          console.log(name);
          return (
            <div>
              <Part parts={part} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Course;
