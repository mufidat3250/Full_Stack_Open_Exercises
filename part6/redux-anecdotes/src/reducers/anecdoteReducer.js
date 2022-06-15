const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

 export const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};


export const addAnecdote = (content) => {
  return {
    type: "ADD ANECDOTE",
    payload: {
      content: content,
      votes: 0,
      id: getId(),
    },
  };
};
 export const vote = (id) => {
  console.log(id, "invote");
  return {
    type: "VOTTING ANECDOTES",
    data: id,
  };
};

export const initialState = anecdotesAtStart.map(asObject);
// console.log(initialState);
 const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "VOTTING ANECDOTES": {
      let id = action.data;
      let singleVote = state.find((anecdote, index) => anecdote.id === id);
      let voteUpdate = { ...singleVote, votes: singleVote.votes + 1 };
      console.log(singleVote);
      console.log(voteUpdate, "voteupdate");
      return state.map((anecdote, index) =>
        anecdote.id === id ? voteUpdate : anecdote
      );
    }
    case "ADD ANECDOTE": {
      return [...state, action.payload];
    }
    default:
      break;
  }

  return state;
};

export default reducer;
