import { memo } from "react";
import { CardWithId, Actions } from "../../types";

const useClassNames = (...args: (string | boolean)[]) =>
  args.filter(Boolean).join(" ");

const Card = ({ id, emoji, inGame, reversed, onClick }: CardProps) => {
  return (
    <div
      className={useClassNames(
        "card",
        reversed && "card--rotated",
        !inGame && "card--hidden"
      )}
      onClick={() => onClick({ type: "add", id })}
      tabIndex={0}
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
