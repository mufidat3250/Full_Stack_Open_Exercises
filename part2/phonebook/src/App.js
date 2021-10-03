import React, { useState } from "react";
import Note from "./components/Note";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("mufidat");
  console.log(persons);
  const inputValue = (e) => {
    setNewName(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();
    const noteObject = { name: newName, id: newName };

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }
    setPersons(persons.concat(noteObject));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={inputValue} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return <Note person={person} key={person.id} />;
        })}
      </ul>
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
