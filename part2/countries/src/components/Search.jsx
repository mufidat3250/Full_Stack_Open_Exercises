import React from "react";

function Search({ value, onchange }) {
  return (
    <p>
      find countries <input value={value} onChange={onchange} />
    </p>
  );
}

export default Search;
