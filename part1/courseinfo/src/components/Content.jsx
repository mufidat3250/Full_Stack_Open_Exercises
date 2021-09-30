import React from "react";
import Part from "./Part";

function Content(props) {
  const { part } = props;
  const { name, exercises, id } = part;
  return (
    <div key={id}>
      <div>
        {part.map((part) => {
          const { name, exercises, id } = part;

          return (
            <div key={id}>
              <Part parts={part} />
            </div>
          );
        })}
      </div>
      <h4>
        Total of {part.reduce((acc, cur) => acc + cur.exercises, 0)} exercises
      </h4>
    </div>
  );
}

export default Content;
