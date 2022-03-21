import { memo } from "react";
import { MdOutlineLeaderboard } from "react-icons/md";
import { State } from "../types";

const BestScore = ({ bestscore }: { bestscore: State["bestscore"] }) => (
  <div className="with-icon">
    <MdOutlineLeaderboard /> Bestscore: {bestscore ? bestscore : "-"}
  </div>
);

export default memo(BestScore);
