import { memo } from "react";
import { CardWithId, Actions } from "../types";
import joinClassNames from "../helpers/joinClassNames";

const Card = ({ id, emoji, inGame, reversed, onClick }: CardProps) => {
  return (
    <div
      className={joinClassNames(
        "card",
        reversed && "card--rotated",
        !inGame && "card--hidden"
      )}
      onClick={() => onClick({ type: "show", id })}
    >
      <div className="card__wrapper">
        <div className="card__obverse" />
        <div className="card__reverse">
          <div className="emoji">{emoji}</div>
        </div>
      </div>
    </div>
  );
};

export type CardProps = CardWithId & {
  onClick: React.Dispatch<Actions>;
};

export default memo(Card);
