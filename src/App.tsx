import useGame from "./hooks/useGame";
import Card from "./components/Card";
import { MdOutlineLeaderboard, MdAutorenew, MdAdsClick } from "react-icons/md";
import BestScore from "./components/BestScore";

const App = () => {
  const {
    state: { cards, moves, pairsToFind, bestscore },
    dispatch,
    reset,
  } = useGame();

  return (
    <div className="app">
      <div className="cards-container">
        {Object.entries(cards).map(([id, props]) => (
          <Card {...{ id, ...props }} dispatch={dispatch} key={id} />
        ))}
      </div>

      <div className="panel">
        <button onClick={reset} className="restart-btn with-icon">
          <MdAutorenew /> New game
        </button>
        <div className="moves with-icon">
          <MdOutlineLeaderboard /> Moves: {moves}
        </div>
        <div className="moves with-icon">
          <MdAdsClick /> Left: {pairsToFind}
        </div>
        <BestScore bestscore={bestscore} />
      </div>
    </div>
  );
};

export default App;
