import { makeCards } from "./makeCards";
import getBestScore from "./getBestScore";
import { State } from "../types";

const getInitialState = (n: number): State => ({
  reversedCards: [],
  cards: makeCards(n),
  moves: 0,
  bestscore: getBestScore(),
  pairsToFind: n,
});

export default getInitialState;
