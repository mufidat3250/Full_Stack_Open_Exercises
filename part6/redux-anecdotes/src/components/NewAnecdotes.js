import React from "react";
import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";
import { notify } from "../reducers/notificationReducers";
const NewAnecdotes = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let content = e.target.anecdote.value;
    dispatch(addAnecdote(content));
    e.target.anecdote.value = "";
    let message = "you created";
    dispatch({
      type: "notification/notify",
      payload: { content: content, message: message },
    });
    setTimeout(() => {
      dispatch({ type: "notification/notify", payload: "" });
    }, 1000);
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default NewAnecdotes;
