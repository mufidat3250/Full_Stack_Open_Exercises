import React from "react";
import { useState, useEffect } from "react";
// import {}

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const url = "https://restcountries.com/v3.1/all";
  console.log(countries);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setCountries(json))
      .catch((err) => console.log(err));
  }, []);

  //checking the output from the inputField
  const showcountries = query
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      )
    : countries;

  const users_ =
    showcountries.length === 1 ? (
      <div>
        <h1>{showcountries[0].name.common}</h1>
        <p>capital: {showcountries[0].capital}</p>
        <p>Population: {showcountries[0].population}</p>
        <h2>Language</h2>
        <ul>
          {Object.values(showcountries[0].languages).map(
            (language, langIndex) => {
              return <li key={langIndex}>{language}</li>;
            }
          )}
        </ul>
        <img src={showcountries[0].flags.png} alt="" />
      </div>
    ) : showcountries.length > 10 ? (
      <p>Too many countries, specify another filter</p>
    ) : (
      showcountries.map((country) => {
        return (
          <ul key={country.flag}>
            <li>{country.name.common}</li>
          </ul>
        );
      })
    );

  return (
    <div>
      <span>Find Countries</span>
      <input value={query} onChange={(e) => setQuery(e.target.value.trim())} />
      {users_}
    </div>
  );
};

export default App;
