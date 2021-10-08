import React from "react";

function Countries({ countriesData }) {
  console.log(countriesData);
  return (
    <div className="country-name">
      {countriesData.map((country) => {
        const {
          name: { official },
        } = country;

        return <p>{official}</p>;
      })}
    </div>
  );
}

export default Countries;
