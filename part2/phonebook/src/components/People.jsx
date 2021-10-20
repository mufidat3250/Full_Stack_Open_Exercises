import React from "react";
import Note from "./Note";

export default function People({ people, deletePeople }) {
  return (
    <ul>
      {people.map((person) => {
        return (
          <Note person={person} key={person.id} deletePeople={deletePeople} />
        );
      })}
    </ul>
  );
}
