import React, { useState } from "react";
import Note from "./components/Note";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  console.log(persons.length);
  const [newName, setNewName] = useState("mufidat");
  const [newNumber, setNewNumber] = useState("");
  const [quary, setQuary] = useState("");

  console.log(quary);
  const inputValue = (e) => {
    setNewName(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();
    const noteObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    };

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }
    setPersons(persons.concat(noteObject));
    setNewName("");
    setNewNumber("");
  };

  const numberValue = (event) => {
    setNewNumber(event.target.value);
  };

  const search = (event) => {
    setQuary(event.target.value);
  };

  const displaySearch = persons.filter((person) =>
    person.name.toLowerCase().includes(quary)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={quary} onChange={search} />
      <h3>add a new</h3>
      <form onSubmit={addName}>
        <div className="inputField">
          name: <input value={newName} onChange={inputValue} /> <br />
          number: <input value={newNumber} onChange={numberValue} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {displaySearch.map((person) => {
          return <Note person={person} key={person.id} />;
        })}
      </ul>
    </div>
  );
};

export default App;
