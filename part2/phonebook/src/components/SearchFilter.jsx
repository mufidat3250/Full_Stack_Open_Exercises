import React from "react";

function SearchFilter({ value, onchange }) {
  return (
    <div>
      filter shown with <input value={value} onChange={onchange} />
    </div>
  );
}

export default SearchFilter;
