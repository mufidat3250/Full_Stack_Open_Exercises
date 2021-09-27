import React from "react";

function Feedback(props) {
  return (
    <div>
      <p>
        {props.text} {props.value}
      </p>
    </div>
  );
}

export default Feedback;
