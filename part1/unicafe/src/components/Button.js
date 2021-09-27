import React from "react";

const Button = (props) => {
  const { onClick, text } = props;
  return (
    <div>
      <button onClick={onClick} className="btn">
        {text}
      </button>
    </div>
  );
};

export default Button;
