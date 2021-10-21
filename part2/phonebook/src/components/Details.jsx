///app.js

import React, { useState, useEffect } from "react";
import SearchFilter from "./components/SearchFilter";
import PersonForm from "./components/PersonForm";
import People from "./components/People";
import personsService from "./services/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setQuery] = useState("");
  console.log(persons);

  useEffect(() => {
    personsService
      .getall()
      .then((res) => {
        setPersons(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addName = (e) => {
    e.preventDefault();
    if (!newName || !newNumber) {
      return null;
    }
    const personObject = {
      name: newName,
      number: newNumber,
      // id is generated
    };

    if (
      persons.find(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      alert(`${newName} ia already added to phonebook`);
      setNewName("");
      setNewNumber("");
      return;
    }

    personsService.create(personObject).then((response) => {
      setPersons(persons.concat(response.data));
      setNewName("");
      setNewNumber("");
    });
  };

  const computedPeople = query.trim()
    ? persons.filter(
        (person) =>
          person.name.toLowerCase().includes(query) ||
          String(person.number).includes(query)
      )
    : persons;

  const deletePeople = (id) => {
    personsService
      .Delete(id)
      .then((res) => setPersons(persons.filter((person) => person.id !== id)));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter
        value={query}
        onchange={(event) => setQuery(event.target.value)}
      />
      <h3>add a new</h3>

      <PersonForm
        // declarations
        onsubmit={addName}
        newName={newName}
        newNumber={newNumber}
        peoplesName={(e) => setNewName(e.target.value)}
        peoplesContact={(e) => setNewNumber(e.target.value)}
      />

      <h2>Numbers</h2>

      <People people={computedPeople} deletePeople={deletePeople} />
    </div>
  );
};

export default App;

// personsService
//   .replace(uniqueUser.id, personObject)
//   .then((res) =>
//     setNewNumber(persons.filter((person) => (person.number = newNumber)))
//   );
// ................................

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

// ..................................
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

// .....................................

import React from "react";

function SearchFilter({ value, onchange }) {
  return (
    <div>
      filter shown with <input value={value} onChange={onchange} />
    </div>
  );
}

export default SearchFilter;

// ..........................................
import React from "react";

function PersonForm({
  onsubmit,
  newName,
  newNumber,
  peoplesName,
  peoplesContact,
}) {
  return (
    <form onSubmit={onsubmit}>
      <div className="inputField">
        name: <input value={newName} onChange={peoplesName} /> <br />
        number: <input value={newNumber} onChange={peoplesContact} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;

// .................................

