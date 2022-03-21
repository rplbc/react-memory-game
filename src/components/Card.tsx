import { memo } from "react";
import joinClassNames from "../helpers/joinClassNames";
import { CardWithId, Actions } from "../types";

const Card = ({ id, emoji, inGame, reversed, dispatch, name }: CardProps) => {
  return (
    <div
      className={joinClassNames(
        "card",
        reversed && "card--rotated",
        !inGame && "card--hidden"
      )}
      onClick={() => dispatch({ type: "show", id })}
    >
      <div className="card__wrapper">
        <div className="card__obverse" />
        <div className="card__reverse">
          <div className="emoji">{emoji}</div>
          <div className="name">{name}</div>
        </div>
      </div>
    </div>
  );
};

export type CardProps = CardWithId & {
  dispatch: React.Dispatch<Actions>;
};

export default memo(Card);
