import React from "react";

function Note({ person, deletePeople }) {
  return (
    <li>
      <p>
        {person.name} {person.number}
        <button
          onClick={() => {
            window.confirm(`Delete ${person.name}`) && deletePeople(person.id);
          }}
        >
          delete
        </button>
      </p>
    </li>
  );
}

export default Note;
