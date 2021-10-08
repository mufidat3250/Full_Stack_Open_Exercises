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
        console.log(countries);
      })
      .catch((err) => console.log("error message", err));
  }, []);

  const showSearch = searchInput.trim()
    ? countries.filter((country) => {
        const {
          name: { official },
        } = country;
        console.log(official);
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
        {showSearch.length > 10
          ? "Too many search specify, with another filter"
          : showSearch.map(({ name: { official } }, searchIndex) => {
              return <p>{official}</p>;
            })}
      </div>
    </div>
  );
}

export default App;
