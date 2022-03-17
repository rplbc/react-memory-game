type Id = string;

export type Cards = {
  [id: Id]: Card;
};

export type Card = {
  reversed: boolean;
  inGame: boolean;
  emoji: string;
};

export type CardWithId = { id: Id } & Card;

export type Actions =
  | { type: "add"; id: string }
  | { type: "toggle" }
  | { type: "reset"; n: number };

export type State = {
  score: number;
  cards: Cards;
  reversedCards: Id[];
};
