import React, { useState, useEffect } from "react";
import SearchFilter from "./components/SearchFilter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Persons";
import personsService from "./services/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setQuary] = useState("");

  const addName = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      //id is generated randomly by the server
    };

    axios
      .post("http://localhost:3002/persons", personObject)
      .then((responce) => {
        console.log(responce.data);
        setPersons(persons.concat(responce.data));
        setNewName("");
        setNewNumber("");
      });

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }
    setPersons(persons.concat(personObject));
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
    axios
      .get("http://localhost:3002/persons")
      .then((res) => {
        setPersons(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   personsService
  //     .getall()
  //     .then((res) => {
  //       console.log(res.data);
  //       setPerson(res.data);
  //       // console.log(person);
  //     })
  //     .catch((err) => {
  //       console.log("Error!!", err);
  //     });
  // }, []);

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
