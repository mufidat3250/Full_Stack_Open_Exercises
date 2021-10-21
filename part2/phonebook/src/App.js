import React, { useState, useEffect } from "react";
import SearchFilter from "./components/SearchFilter";
import PersonForm from "./components/PersonForm";
import People from "./components/People";
import PersonsService from "./services/Persons";

// const Notifcation = ({ message }) => {
//   if (message === null) {
//     return null;
//   }
//   return <div className="error">{message}</div>;
// };

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setQuery] = useState("");
  const [errorMessaage, setErrorMessage] = useState("some ");

  useEffect(() => {
    PersonsService.getall().then((res) => {
      setPersons(res);
    });
  }, []);

  const replacedData = (pers, obj) => {
    const newObject = { ...pers, number: obj.number };

    console.log(newObject);
    PersonsService.Replace(pers.id, newObject).then((res) => {
      console.log(res);
      setPersons(
        persons.map((person) => (person.id !== pers.id ? person : res))
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName || !newNumber) {
      return null;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    // check if the current input correlate with the user input
    const personUpdate = persons.find((person) => {
      const currentPerson = { ...person };
      console.log({ person }, currentPerson.name);
      return currentPerson.name.toLowerCase() === newName.toLowerCase();
    });
    console.log({ personUpdate });
    if (personUpdate) {
      window.confirm(
        `${personObject.name} is already added to phone book replace the old num with a new one`
      ) && replacedData(personUpdate, personObject);
      setNewNumber("");
      setNewName("");
    } else {
      console.log("strteddd");
      PersonsService.create(personObject).then((data) => {
        console.log(data);
        setPersons(persons.concat(data));
        setNewNumber("");
        setNewName("");
        //adding timer
        // setErrorMessage(`${personObject.name} has being added succesfully`);
        // setTimeout(() => {
        //   setErrorMessage(null);
        // }, 5000);
      });
    }
    console.log("closeddd");
  };

  //check if the id from the person is not equal to the id from the server
  const DeleteData = (id) => {
    PersonsService.Delete(id).then((res) =>
      setPersons(persons.filter((person) => person.id !== id))
    );
  };

  // first aproachfor search field

  // const SearchField = query.trim()
  //   ? persons.filter(
  //       (person) =>
  //         person.name.toLowerCase().includes(query) ||
  //         person.number.toLowerCase().includes(query)
  //     )
  //   : persons;

  //sec method to use search feild

  const SearchField = persons.filter((person) => {
    const currentPerson = { ...person };
    // console.log({ Sperson: person }, String(currentPerson.name));
    return String(currentPerson.name).toLowerCase().includes(query);
  });
  console.log({ SearchField });

  return (
    <div>
      <h2>Phonebook</h2>

      {/* <Notifcation message={errorMessaage} /> */}

      <SearchFilter
        value={query}
        onChange={(e) => setQuery(e.target.value.trim())}
      />

      <h1>add a new</h1>
      <PersonForm
        nameInput={newName}
        numberInput={newNumber}
        setNewName={(e) => setNewName(e.target.value)}
        setNewNumber={(e) => setNewNumber(e.target.value)}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <People
        persons={persons}
        SearchField={SearchField}
        deleteData={DeleteData}
      />
    </div>
  );
};

export default App;
