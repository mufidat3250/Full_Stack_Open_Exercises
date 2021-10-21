import React from "react";

function PersonForm({
  nameInput,
  numberInput,
  setNewName,
  setNewNumber,
  handleSubmit,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={nameInput} onChange={setNewName} />
        </div>
        <div>
          number: <input value={numberInput} onChange={setNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

export default PersonForm;
