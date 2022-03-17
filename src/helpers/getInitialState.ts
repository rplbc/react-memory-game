import { makeCards } from "./emojis";

const getInitialState = (n: number) => ({
  reversedCards: [],
  cards: makeCards(n),
  score: 0,
});

export default getInitialState;
