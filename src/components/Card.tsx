import { memo } from "react";
import joinClassNames from "../helpers/joinClassNames";
import { CardWithId, Actions } from "../types";

const Card = ({ id, code, inGame, reversed, dispatch, name }: CardProps) => {
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
          <div className="card__flag">
            <img
              src={`https://flagcdn.com/256x192/${code}.png`}
              width="256"
              height="192"
              alt={name}
            />
          </div>
          <div className="card__name">{name}</div>
        </div>
      </div>
    </div>
  );
};

export type CardProps = CardWithId & {
  dispatch: React.Dispatch<Actions>;
};

export default memo(Card);
