import { makeCards } from "./emojis";

const getInitialState = (n: number) => ({
  reversedCards: [],
  cards: makeCards(n),
  moves: 0,
});

export default getInitialState;
