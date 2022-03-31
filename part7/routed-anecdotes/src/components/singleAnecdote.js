import React from "react";

function SingleAnecdotes({ anecdote }) {
  console.log(anecdote);
  return (
    <div>
      <h1>{anecdote.content}</h1>
      <p> has {anecdote.votes} votes</p>
      <p>{anecdote.info}</p>
    </div>
  );
}

export default SingleAnecdotes;
