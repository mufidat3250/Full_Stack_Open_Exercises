import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdote);
  const dispatch = useDispatch();
  const handleClick = (id, content, message) => {
    dispatch(vote(id));
    dispatch({
      type: "notification/notify",
      payload: { content: content, message: message },
    });
    setTimeout(() => {
      dispatch({ type: "notification/notify", payload: "" });
    }, 2000);
  };
  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() =>
                handleClick(anecdote.id, anecdote.content, "you votted")
              }
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
