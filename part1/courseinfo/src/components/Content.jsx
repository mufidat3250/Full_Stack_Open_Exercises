import React from "react";
import Part from "./Part";

function Content({ part }) {
  return (
    <div>
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
    </div>
  );
}

export default Content;
