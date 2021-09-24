import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content list1={part1} list2={part2} list3={part3} />
      <Total list1={part1} list2={part2} list3={part3} />
    </div>
  );
};

// const App = () => {
//   const course = "Half Stack application development";
//   const parts = [
//     {
//       part: "Fundamentals of React",
//       exercise: 10,
//     },
//     {
//       part: "Using props to pass data",
//       exercise: 7,
//     },
//     {
//       part: "State of a component",
//       exercise: 14,
//     },
//   ];

//   return (
//     <div>
//       <Header course={course} />
//       <Content list={parts} />
//       <Total exercise={parts} />
//     </div>
//   );
// };

export default App;
