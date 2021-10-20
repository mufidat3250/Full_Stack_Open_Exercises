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

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      return;
    }

    personsService.create(personObject).then((response) => {
      console.log(response.data);
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
  // console.log(persons.name);
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
