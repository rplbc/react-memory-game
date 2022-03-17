import useGame from "./hooks/useGame";
import Card from "./components/Card";

const App = () => {
  const {
    state: { cards, score },
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
        <div className="score">Score: {score}</div>
      </div>
    </div>
  );
};

export default App;
