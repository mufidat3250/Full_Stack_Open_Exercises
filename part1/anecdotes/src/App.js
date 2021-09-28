import React, { useState } from "react";
// import data from "./components/Anecdotes";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
];
const Winner = ({ anecdotes, allvote }) => {
  const highestVoteCount = Math.max(...allvote);
  const winnerIndex = allvote.indexOf(highestVoteCount);
  const winner = anecdotes[winnerIndex];
  if (highestVoteCount === 0) {
    return <p> no vote yet</p>;
  }
  return (
    <div>
      <p>{winner}</p>
      <p>has {highestVoteCount} votes</p>
    </div>
  );
};

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};
const Button = ({ onclick, text }) => {
  return <button onClick={onclick}>{text}</button>;
};

function App() {
  const [selected, setSelected] = useState(0);
  const [allvote, setAllvote] = useState(Array(anecdotes.length).fill(0));
  const randomSelect = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const handleVoteClick = () => {
    const copy = [...allvote];
    copy[selected] += 1;
    setAllvote(copy);
  };
  const maxVote = Math.max();
  return (
    <div className="container">
      <Header text="Anecdote of the day" />

      <p>{anecdotes[selected]}</p>
      <p>has {allvote[selected]} votes</p>
      <Button onclick={handleVoteClick} text="vote" />
      <Button onclick={randomSelect} text="next anecdotes" />
      <Header text="Anecdote with most votes" />
      <Winner anecdotes={anecdotes} allvote={allvote} />
    </div>
  );
}

export default App;
