import AnecdoteList from "./components/AnecdoteList";
import NewAnecdotes from "./components/NewAnecdotes";
import Notification from "../src/components/Notification";
const App = () => {
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <NewAnecdotes />
    </div>
  );
};

export default App;
