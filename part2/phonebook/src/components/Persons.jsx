import React from "react";
import Note from "./Note";

function Persons({ person_s, query_ }) {
  const displaySearch = person_s.filter((person) =>
    person.name.toLowerCase().includes(query_)
  );
  return (
    <ul>
      {displaySearch.map((person) => {
        return <Note person={person} key={person.id} />;
      })}
    </ul>
  );
}

export default Persons;
