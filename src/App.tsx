import useGame from "./hooks/useGame";
import Card from "./components/Card";

const App = () => {
  const {
    state: { cards, moves },
    dispatch,
    reset,
  } = useGame();

  return (
    <div className="app">
      <div className="cards-container">
        {Object.entries(cards).map(([id, props]) => (
          <Card {...{ id, ...props }} onClick={dispatch} key={id} />
        ))}
      </div>

      <div className="panel">
        <button onClick={reset} className="restart-btn">
          New game
        </button>
        <div className="moves">Moves: {moves}</div>
      </div>
    </div>
  );
};

export default App;
