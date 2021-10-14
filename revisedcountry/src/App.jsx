import { useEffect, useState } from "react";
import axios from "axios";
import react from "react";
// import "./styles.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios("https://restcountries.com/v3.1/all")
      .then(({ data }) => setCountries(data))
      .catch(console.error);
  }, []);

  const fetchWeather = (countryName) => {
    console.log({ countryName });
    axios(
      `http://api.weatherstack.com/current?query=${countryName}&access_key=26e834681363492ae04791fa10f8b6b8`
    )
      .then(({ data }) => {
        console.log(data.current);
        setCountries(
          countries.map((country) => {
            if (country.name.common === countryName)
              country = {
                ...country,
                weather: data.current,
              };
            return country;
          })
        );
      })
      .catch(console.error);
  };

  const countriesToShow = query
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      )
    : countries;
  console.log(countriesToShow);

  useEffect(() => {
    if (countriesToShow.length === 1) {
      const country = countriesToShow[0];

      if (country.weather) return;

      fetchWeather(country.name.common);
    }
  }, [countriesToShow]);

  const output = !query ? (
    ""
  ) : countriesToShow.length > 10 ? (
    <p>Too many countries, specify another filter</p>
  ) : countriesToShow.length === 1 ? (
    <div>
      <h1>{countriesToShow[0].name.common}</h1>
      <p>Capital: {countriesToShow[0].capital}</p>
      <p>Population: {countriesToShow[0].population}</p>
      <p>Temperature: {countriesToShow[0].weather?.temperature}</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(countriesToShow[0].languages).map(
          (language, langIndex) => (
            <li key={`lang-index_${langIndex}`}>{language}</li>
          )
        )}
      </ul>
      <img src={countriesToShow[0].flags.png} alt="Flag" />
    </div>
  ) : (
    countriesToShow.map((country) =>
      country.weather ? (
        <div key={`${country.flag}_full`}>
          <h1>{country.name.common}</h1>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          {/* {Object.keys(country.weather).map((key) => (
            <p key={`${country.flag}-${key}`}>
              {key}: {country.weather[key]}
            </p>
          ))} */}
          <p>Temperature: {country.weather.temperature}</p>
          <h2>Languages</h2>
          <ul>
            {Object.values(country.languages).map((language, langIndex) => (
              <li key={`lang-index_${langIndex}`}>{language}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt="Flag" />
        </div>
      ) : (
        <p key={country.flag}>
          {country.name.common}{" "}
          <button onClick={() => fetchWeather(country.name.common)}>
            Show
          </button>
        </p>
      )
    )
  );

  return (
    <div className="App">
      <form>
        <span>Find countries</span>{" "}
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value.trim())}
        />
      </form>
      <div>{output}</div>
    </div>
  );
};
export default App;
