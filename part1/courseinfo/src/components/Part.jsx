import React from "react";

const Part = (props) => {
  const { name, exercises, id } = props.parts;

  return (
    <p key={id}>
      {name} {exercises}
    </p>
  );
};

export default Part;
