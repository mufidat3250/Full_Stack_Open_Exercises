import React from "react";

function PersonForm({
  onsubmit,
  newName,
  newNumber,
  peoplesName,
  peoplesContact,
}) {
  return (
    <form onSubmit={onsubmit}>
      <div className="inputField">
        name: <input value={newName} onChange={peoplesName} /> <br />
        number: <input value={newNumber} onChange={peoplesContact} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;
