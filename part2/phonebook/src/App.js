import React, { useState, useEffect } from "react";
import SearchFilter from "./components/SearchFilter";
import PersonForm from "./components/PersonForm";
import People from "./components/People";
import PersonsService from "./services/Persons";

const Notifcation = ({ message }) => {
  if (!message) {
    return null;
  }
  return (
    <div>
      <div className="success">{message}</div>
      {/* <div className="error">{message}</div> */}
    </div>
  );
};

const Notifcation2 = ({ message }) => {
  if (!message) {
    return null;
  }
  return (
    <div>
      <div className="error">{message}</div>
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setQuery] = useState("");
  const [success, setSuccess] = useState("");
  const [Error, setError] = useState("");

  useEffect(() => {
    PersonsService.getall().then((res) => {
      console.log(res);
      setPersons(res);
    });
  }, []);

  const replacedData = (pers, obj) => {
    const newObject = { ...pers, number: obj.number };

    console.log(newObject);
    PersonsService.Replace(pers.id, newObject)
      .then((res) => {
        console.log(res);
        setPersons(
          persons.map((person) => (person.id !== pers.id ? person : res))
        );
      })
      .catch((err) => {
        setPersons(persons.filter((person) => person.id !== pers.id));
        setError(`information of ${pers.name} has being deleted from server`);
        setTimeout(() => {
          setError(null);
        }, 5000);
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
      PersonsService.create(personObject)
        .then((data) => {
          if (data.name.length < 3 || data.number.length < 8) {
            setError(
              `Person validation failed: name: Path ${data.name} is shorter than the minimum allowed length(3)`
            );
            setNewNumber("");
            setNewName("");
            setTimeout(() => {
              setError(null);
            }, 5000);
            return;
          }
          setPersons(persons.concat(data));
          setNewNumber("");
          setNewName("");
          //adding timer
          setSuccess(`${personObject.name} has being added succesfully`);
          setTimeout(() => {
            setSuccess(null);
          }, 5000);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
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
    return String(person.name).toLowerCase().includes(query);
  });
  console.log({ SearchField });

  return (
    <div>
      <h2>Phonebook</h2>

      <Notifcation message={success} />
      <Notifcation2 message={Error} />

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
