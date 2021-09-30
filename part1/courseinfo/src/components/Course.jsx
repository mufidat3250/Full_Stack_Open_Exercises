import React from "react";
import Header from "./Header";
import Content from "./Content";

function Course({ course }) {
  return (
    <>
      <Header
        name={course[0]}
        text={course[0].name}
        heading="Web development curriculum"
      />
      <Content part={course[0].parts} />

      <Header text={course[1].name} />
      <Content part={course[1].parts} />
    </>
  );
}

export default Course;
