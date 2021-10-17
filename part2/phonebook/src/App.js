import React, { useState, useEffect } from "react";
import SearchFilter from "./components/SearchFilter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Persons";
import persons from "./db.json";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("mufidat");
  const [newNumber, setNewNumber] = useState("");
  const [query, setQuary] = useState("");
  // const [person, setPerson] = useState([]);

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

  const search = (event) => {
    setQuary(event.target.value);
  };
  const numberValue = (event) => {
    setNewNumber(event.target.value);
  };
  const inputValue = (e) => {
    setNewName(e.target.value);
  };
  useEffect(() => {
    console.log(persons);
    // axios
    //   .get("http://localhost:3001/persons")
    //   .then((res) => {
    //     // console.log(res.data);
    //     setPerson(res.data);
    //     console.log(person);
    //   })
    //   .catch((err) => {
    //     console.log("Error!!", err);
    //   });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter value={query} onchange={search} />
      <h3>add a new</h3>

      <PersonForm
        // declearations
        onsubmit={addName}
        newName={newName}
        newNumber={newNumber}
        input1={inputValue}
        input2={numberValue}
      />

      <h2>Numbers</h2>

      <Person person_s={persons} query_={query} />
    </div>
  );
};

export default App;
