import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
// import Countries from "./components/Countries";
function App() {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("error message", err));
  }, []);

  const showSearch = searchInput.trim()
    ? countries.filter((country) => {
        const {
          name: { official },
        } = country;
        return official
          .toLowerCase()
          .includes(searchInput.trim().toLowerCase());
      })
    : [];

  return (
    <div className="App">
      <Search
        value={searchInput}
        onchange={(e) => setSearchInput(e.target.value)}
      />

      <div>
        {showSearch.length === 1 ? (
          showSearch.map(
            (
              { name: { official }, capital: [capital], population },
              searchIndex
            ) => {
              console.log(population);
              return (
                <div>
                  <p>{official}</p>
                  <p>Capital: {capital}</p>
                  <p>Population: {population}</p>
                </div>
              );
            }
          )
        ) : showSearch.length > 10 ? (
          <p> Too many search specify, with another filter</p>
        ) : (
          showSearch.map(({ name: { official } }) => {
            return <p>{official}</p>;
          })
        )}
      </div>
    </div>
  );
}

export default App;
