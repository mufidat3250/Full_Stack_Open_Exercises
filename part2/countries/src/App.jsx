import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Show from "./components/Show";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
        // console.log(countries);
      })
      .catch((err) => console.log("error message", err));
  }, []);

  const showSearch = searchInput.trim()
    ? countries.filter((country) => {
        const {
          name: { common },
        } = country;
        return common.toLowerCase().includes(searchInput.trim().toLowerCase());
      })
    : [];

  // console.log(showSearch);

  const fetchWeatherData = ({ name: { common } }) => {
    axios
      .get("http://api.weatherstack.com/current", {
        params: {
          query: common,
          access_key: "fe9b66d276959e75982ac2e2c0d82408",
        },
      })
      .then(({ data }) => {
        console.log({ ww: data });

        setWeatherData(data.current ? data.current : {});
      })
      .catch(console.log);
  };
  {
    console.log(weatherData);
  }

  useEffect(() => {
    if (showSearch.length === 1) {
      fetchWeatherData(showSearch[0]);
    }
  }, [searchInput]);

  const users =
    showSearch.length === 1 ? (
      showSearch.map(
        (
          { name: { common }, capital: [capital], population, flags: { png } },
          searchIndex
        ) => {
          console.log(common);
          return (
            <div key={searchIndex}>
              <h1>{common}</h1>
              <div>
                <p>Capital: {capital}</p>
                <p>Population:{population}</p>
                <div>
                  <h1>language</h1>
                  <ul>
                    {showSearch.map((lang, langIndex) => {
                      const languageArray = Object.values(lang.languages);

                      for (let i = 0; i < languageArray.length; i++) {
                        return <li key={langIndex}>{languageArray[i]}</li>;
                      }

                      console.log(languageArray);
                    })}
                  </ul>
                </div>

                <img src={png} alt="flag" />

                {Object.keys(weatherData).length ? (
                  <>
                    <h1>Weather in {common}</h1>
                    <h3>Wind {weatherData.wind_degree}</h3>
                    <h3>Temperature {weatherData.temperature}in Celcius</h3>
                    <img
                      src={weatherData.weather_icons[0]}
                      alt="weather icon"
                    />
                  </>
                ) : (
                  []
                )}
              </div>
            </div>
          );
        }
      )
    ) : showSearch.length > 10 ? (
      <p> Too many search specify, with another filter</p>
    ) : (
      showSearch.map((country) => {
        return (
          <>
            <p>
              {country.name.common}{" "}
              <button
                onClick={() => {
                  setData(country);
                  setShow(true);
                }}
              >
                show
              </button>
            </p>
          </>
        );
      })
    );

  return (
    <div className="App">
      <Search
        value={searchInput}
        onchange={(e) => {
          setSearchInput(e.target.value);
          setShow(false);
        }}
      />
      {show ? <Show countryData={data} weatherData={weatherData} /> : users}
    </div>
  );
}

export default App;
