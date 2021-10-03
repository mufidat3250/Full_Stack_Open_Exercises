import React from "react";

function Note({ person }) {
  return (
    <li>
      <p>
        {person.name} {person.number}
      </p>
    </li>
  );
}

export default Note;
