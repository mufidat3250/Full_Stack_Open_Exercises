import React from "react";
import axios from "axios";
import Search from "./components/SearchField";
import { useState, useEffect } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState(" ");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(({ data }) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);
  const fetchWeather = (countryName) => {
    axios
      .get("http://api.weatherstack.com/current", {
        params: {
          query: countryName,
          access_key: "e9b1a0fd143b2bcd1ba32dd9a8f9b479",
        },
      })
      .then(({ data }) => {
        setCountries(
          countries.map((country) => {
            if (country.name.common === countryName) {
              country = {
                ...country,
                weather: data.current,
              };
              console.log(country.weather);
              return country;
            }
          })
        );
      })
      .catch((err) => console.log(err));
  };
  // fetchWeather("Nigeria");
  console.log(countries);
  const displaySearch = query
    ? countries.filter((country) => {
        return country.name.common.toLowerCase().includes(query.toLowerCase());
      })
    : countries;

  console.log(displaySearch.length);
  console.log(displaySearch);
  useEffect(() => {
    if (displaySearch.length === 1) {
      const country = displaySearch[0];

      if (country.weather) return;
      fetchWeather(country.name.common);
    }
  }, [query]);

  const users =
    displaySearch.length === 1 ? (
      displaySearch.map((search) => {
        return (
          <div key={search.flag}>
            <h1>{search.name.common}</h1>
            <p>capital : {search.capital}</p>
            <p>population: {search.population}</p>
            <p>Temperature: {countriesToShow[0].weather?.temperature}</p>
            <h2>languages</h2>
            {Object.values(search[0].languages).map((language, langIndex) => {
              return (
                <ul key={langIndex}>
                  <li>{language}</li>
                </ul>
              );
            })}
            <img src={search[0].flags.png} alt="country flag" />
          </div>
        );
      })
    ) : displaySearch.length > 10 ? (
      <p>Too many matches, specify another filter</p>
    ) : displaySearch.map((country)=>
    display.weather? <div>
      <h1>{country.name.common}</h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      {Object.keys(country.weather).map((key)=>}
    </div> 
    )
      
    

  return (
    <div className=" App">
      <Search value={query} onChange={(e) => setQuery(e.target.value.trim())} />
      {users}
    </div>
  );
};

export default App;

{/* <div>
            <p>
              {display.name.common}{" "}
              <button onClick={() => fetchWeather(display.name.common)}>
                show
              </button>
            </p>
          </div> */}