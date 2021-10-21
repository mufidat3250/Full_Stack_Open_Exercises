import React from "react";

function People({ persons, SearchField, deleteData }) {
  return (
    <div>
      {SearchField.map((person, personIndex) => {
        const currentPerson = { ...person };
        return (
          <p key={personIndex}>
            {currentPerson.name} {currentPerson.number}{" "}
            <button
              onClick={() =>
                window.confirm(`Delete ${person.name}`) && deleteData(person.id)
              }
            >
              delete
            </button>
          </p>
        );
      })}
    </div>
  );
}

export default People;
