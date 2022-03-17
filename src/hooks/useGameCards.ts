import { Reducer, useCallback, useEffect, useReducer, useRef } from "react";
import { makeCards } from "../helpers/emojis";
import { State, Actions } from "./../../types";

const reducer: Reducer<State, Actions> = (state, action) => {
  switch (action.type) {
    case "add":
      if (state.reversedCards.length > 1) return state;
      const { id } = action;
      return {
        ...state,
        reversedCards: [...state.reversedCards, id],
        cards: {
          ...state.cards,
          [id]: {
            ...state.cards[id],
            reversed: true,
          },
        },
      };

    case "toggle":
      const [id1, id2] = state.reversedCards;
      const areEqual = state.cards[id1].emoji === state.cards[id2].emoji;
      return {
        score: state.score + 1,
        reversedCards: [],
        cards: {
          ...state.cards,
          [id1]: {
            ...state.cards[id1],
            reversed: areEqual,
            inGame: !areEqual,
          },
          [id2]: {
            ...state.cards[id2],
            reversed: areEqual,
            inGame: !areEqual,
          },
        },
      };

    case "reset": {
      return {
        reversedCards: [],
        cards: makeCards(action.n),
        score: 0,
      };
    }

    default:
      throw new Error(`${action} is wrong action type`);
  }
};

const useGameCards = (n: number = 6) => {
  const timeoutId = useRef<number | null>();
  const [state, dispatch] = useReducer(reducer, n, (n) => ({
    cards: makeCards(n),
    reversedCards: [],
    score: 0,
  }));

  useEffect(() => {
    if (state.reversedCards.length === 2)
      timeoutId.current = window.setTimeout(() => {
        dispatch({ type: "toggle" });
      }, 1000);
  }, [state.reversedCards]);

  const reset = useCallback(() => {
    clearTimeout(timeoutId.current || 0);
    dispatch({ type: "reset", n });
  }, [n]);

  return { state, dispatch, reset };
};

export default useGameCards;
