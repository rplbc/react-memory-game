import useGame from "./hooks/useGame";
import Card from "./components/Card";
import BestScore from "./components/BestScore";
import { MdOutlineLeaderboard, MdAutorenew, MdGridView } from "react-icons/md";

const App = () => {
  const {
    state: { cards, moves, pairsToFind, bestscore },
    dispatch,
    reset,
  } = useGame();

  return (
    <div className="app">
      <div className="stats">
        <div className="with-icon">
          <MdOutlineLeaderboard /> Moves: {moves}
        </div>
        <div className="with-icon">
          <MdGridView /> Left: {pairsToFind}
        </div>
        <BestScore bestscore={bestscore} />
      </div>

      <div className="cards-container">
        {Object.entries(cards).map(([id, props]) => (
          <Card {...{ id, ...props }} dispatch={dispatch} key={id} />
        ))}
      </div>

      <button onClick={reset} className="restart-btn with-icon">
        <MdAutorenew /> New game
      </button>
    </div>
  );
};

export default App;
