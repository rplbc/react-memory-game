type Id = string;

export type Cards = {
  [id: Id]: Card;
};

export type Card = {
  reversed: boolean;
  inGame: boolean;
  emoji: string;
  name: string;
};

export type CardWithId = { id: Id } & Card;

export type Actions =
  | { type: "show"; id: string }
  | { type: "checkMatches" }
  | { type: "nextMove" }
  | { type: "handleGameEnd" }
  | { type: "reset"; n: number };

export type State = {
  moves: number;
  cards: Cards;
  reversedCards: Id[];
  bestscore: number | null;
  pairsToFind: number;
};
