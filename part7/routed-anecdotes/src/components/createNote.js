import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useField } from "../hooks";
const CreateNew = (props) => {
  const content_ = useField("text");
  const author_ = useField("text");
  const info_ = useField("text");

  const handleClick = () => {
    content_.reset();
    author_.reset();
    info_.reset();
  }
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: content_.value,
      author: author_.value,
      info: info_.value,
      votes: 0,
    });

    navigate("/");
  };
  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            name="content"
            type={content_.type}
            value={content_.value}
            onChange={content_.onChange}
          />
        </div>
        <div>
          author
          <input
            name="author"
            type={author_.type}
            value={author_.value}
            onChange={author_.onChange}
          />
        </div>
        <div>
          url for more info
          <input
            name="info"
            type={info_.type}
            value={info_.value}
            onChange={info_.onChange}
          />
        </div>
        <button type="submit">create</button>
        <button type="reset" onClick={() => handleClick()}>
          reset
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
