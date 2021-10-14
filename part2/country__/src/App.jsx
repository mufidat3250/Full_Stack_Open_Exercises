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
          access_key: "fe9b66d276959e75982ac2e2c0d82408",
        },
      })
      .then(({ data }) => {
        console.log(data);
        setCountries(
          countries.map((search) => {
            return console.log(search);
            // if (search.name.common === countryName) {
            // country = {
            //   ...search,
            //   windDir: wind_dir,
            //   windSpeed: wind_Speed,
            //   windDegree: wind_degree,
            //   temperature: temperature,
            // };
            // }
          })
        );
      });

    // if (displaySearch.name.common === countryName) {
    //   country = {
    //     wind: data.current.wind_degree,
    //     temperature: data.current.temperature,
    //     weatherIcon: data.current.weather_icons[0],
    //     windDir: data.current.wind_dir,
    //   };
    // }
  };
  fetchWeather("Nigeria");

  const displaySearch = query
    ? countries.filter((country) => {
        return country.name.common.toLowerCase().includes(query.toLowerCase());
      })
    : countries;
  // console.log(countries);
  console.log(displaySearch.length);
  console.log(displaySearch);

  const users =
    displaySearch.length === 1 ? (
      displaySearch.map((search) => {
        return (
          <div key={search.flag}>
            <h1>{search.name.common}</h1>
            <p>capital : {search.capital}</p>
            <p>population: {search.population}</p>
            <h2>languages</h2>
            {Object.values(search.languages).map((language, langIndex) => {
              return (
                <ul key={langIndex}>
                  <li>{language}</li>
                </ul>
              );
            })}
            <img src={search.flags.png} alt="country flag" />
          </div>
        );
      })
    ) : displaySearch.length > 10 ? (
      <p>Too many matches, specify another filter</p>
    ) : (
      displaySearch.map((display) => {
        return (
          <div>
            <p>
              {display.name.common} <button>show</button>
            </p>
          </div>
        );
      })
    );

  return (
    <div className=" App">
      <Search value={query} onChange={(e) => setQuery(e.target.value.trim())} />
      {users}
    </div>
  );
};

export default App;
