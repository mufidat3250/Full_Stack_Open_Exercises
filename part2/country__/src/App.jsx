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
  // console.log(countries);

  const displaySearch = query
    ? countries.filter((country) => {
        return country.name.common.toLowerCase().includes(query.toLowerCase());
      })
    : countries;
  // console.log(displaySearch);
  const users = displaySearch.map((search) => {
    return console.log(search.length);
  });
  console.log(displaySearch);

  return (
    <div className=" App">
      <Search value={query} onChange={(e) => setQuery(e.target.value.trim())} />
      {users}
    </div>
  );
};

export default App;
