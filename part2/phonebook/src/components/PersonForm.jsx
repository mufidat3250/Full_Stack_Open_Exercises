import React from "react";

function PersonForm({ onsubmit, newName, newNumber, input1, input2 }) {
  return (
    <form onSubmit={onsubmit}>
      <div className="inputField">
        name: <input value={newName} onChange={input1} /> <br />
        number: <input value={newNumber} onChange={input2} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;
