import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

function Course(props) {
  const { name, parts } = props.course;
  const total = parts.reduce((acc, cur) => acc + cur.exercises, 0);

  return (
    <>
      <Header name={name} />
      <Content part={parts} />
      <Total total={total} />
    </>
  );
}

export default Course;
