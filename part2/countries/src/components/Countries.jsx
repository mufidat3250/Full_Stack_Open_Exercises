import React, { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";

function Countries({ showSearch }) {
  const { weather, setWeather } = useState({});
  console.log(showSearch);

  return (
    <div>
      {showSearch.length === 1 ? (
        showSearch.map(
          (
            {
              name: { common },
              capital: [capital],
              population,
              flags: { png },
            },
            searchIndex
          ) => {
            console.log(common);
            return (
              <div key={searchIndex}>
                <h1>{common}</h1>
                <div>
                  <p>Capital: {capital}</p>
                  <p>Population: {population}</p>
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
                    <span>
                      {/* {useEffect(() => {
                        axios
                          .get("http://api.weatherstack.com/current", {
                            params: {
                              query: common,
                              access_key: "4f997c9aade55f516d11c4bf124d74a3",
                            },
                          })
                          .then(
                            ({
                              data: {
                                current: { temperature, wind_speed, wind_dir },
                              },
                            }) => {
                              setWeather({
                                temperature,
                                wind_speed,
                                wind_dir,
                                wind_degree,
                              });
                            }
                          )
                          .catch((err) => console.log(err));
                      }, [])} */}
                    </span>
                    {console.log(temperature)}
                  </div>

                  {console.log(png)}
                  <img src={png} alt="flag" />

                  <h1>Weather in{common} </h1>
                  <h3>
                    Wind {wind_speed} {wind_dir}
                    {wind_degree}
                  </h3>
                  <h3>Temperature {temperature}Celcius</h3>
                  <img src="" alt="" />
                </div>
              </div>
            );
          }
        )
      ) : showSearch.length > 10 ? (
        <p> Too many search specify, with another filter</p>
      ) : (
        showSearch.map(({ name: { common } }) => {
          return (
            <p>
              {common} <Button />
            </p>
          );
        })
      )}
    </div>
  );
}

export default Countries;
