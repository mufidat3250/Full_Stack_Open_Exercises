import AnecdoteList from "./components/AnecdoteList";
import NewAnecdotes from "./components/NewAnecdotes";
import Notification from "../src/components/Notification";
import Filter from "./components/Filter";
const App = () => {
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <NewAnecdotes />
    </div>
  );
};

export default App;
