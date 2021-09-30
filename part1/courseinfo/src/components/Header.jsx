import React from "react";

function Header(props) {
  const { text, heading } = props;

  return (
    <>
      <h1>{heading}</h1>
      <h3>{text}</h3>
    </>
  );
}

export default Header;
