import { useCallback, useEffect, useReducer, useRef } from "react";
import getInitialState from "../helpers/getInitialState";
import { State, Actions } from "../types";

const reducer: React.Reducer<State, Actions> = (state, action) => {
  switch (action.type) {
    case "show":
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

    case "checkMatches":
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
      return getInitialState(action.n);
    }

    default:
      throw new Error(`${action} is wrong action type`);
  }
};

const useGame = (n: number = 6) => {
  const timeoutId = useRef<number | null>();
  const [state, dispatch] = useReducer(reducer, n, getInitialState);

  useEffect(() => {
    if (state.reversedCards.length === 2)
      timeoutId.current = window.setTimeout(() => {
        dispatch({ type: "checkMatches" });
      }, 1000);
  }, [state.reversedCards]);

  const reset = useCallback(() => {
    clearTimeout(timeoutId.current || 0);
    dispatch({ type: "reset", n });
  }, [n]);

  return { state, dispatch, reset };
};

export default useGame;
