import React from "react";

const Show = ({ weatherData, countryData }) => {
  console.log(weatherData);

  console.log(weatherData);
  return (
    <div>
      <h1> {countryData.name.common}</h1>
      <p>capital {countryData.capital[0]}</p>
      <p>population: {countryData.population}</p>
      <ul>
        {Object.values(countryData.languages).map((language, langIndex) => (
          <li key={langIndex}> {language}</li>
        ))}
      </ul>
      <img src={countryData.flags.png} alt="fcountry flag" />
      <h1>Weather in{countryData.name.common}</h1>
      <p>temperature: {weatherData.temperature} celcius</p>
      {/* <img src={weatherData.weather_icons} alt="" /> */}
      <p>
        wind:{weatherData.wind_speed} mph direcion {weatherData.wind_dir}
      </p>
    </div>
  );
};

export default Show;

//
//
