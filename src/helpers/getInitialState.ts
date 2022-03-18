import { makeCards } from "./emojis";
import { State } from "../types";
import getBestScore from "./getBestScore";

const getInitialState = (n: number): State => ({
  reversedCards: [],
  cards: makeCards(n),
  moves: 0,
  bestscore: getBestScore(),
  pairsToFind: n,
});

export default getInitialState;
