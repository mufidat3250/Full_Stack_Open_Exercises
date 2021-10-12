import React from "react";

function Button() {
  return <button>show</button>;
}

export default Button;

// showSearch.map(
//   (
//     { name: { common }, capital: [capital], population, flags: { png } },
//     searchIndex
//   ) => {
//     console.log(common);
//     return (
//       <div key={searchIndex}>
//         <h1>{common}</h1>
//         <div>
//           {/* {JSON.stringify(weatherData, null, 2)} */}
//           <p>Capital: {capital}</p>
//           <p>Population: {population}</p>
//           <div>
//             <h1>language</h1>
//             <ul>
//               {showSearch.map((lang, langIndex) => {
//                 const languageArray = Object.values(lang.languages);

//                 for (let i = 0; i < languageArray.length; i++) {
//                   return <li key={langIndex}>{languageArray[i]}</li>;
//                 }

//                 console.log(languageArray);
//               })}
//             </ul>
//           </div>

//           <img src={png} alt="flag" />

//           {Object.keys(weatherData).length ? (
//             <>
//               <h1>Weather in {common}</h1>
//               <h3>Wind {weatherData.wind_degree}</h3>
//               <h3>Temperature {weatherData.temperature}in Celcius</h3>
//               <img src={weatherData.weather_icons[0]} alt="weather icon" />
//             </>
//           ) : (
//             []
//           )}
//         </div>
//       </div>
//     );
//   }
// );
