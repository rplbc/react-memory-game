import { memo } from "react";
import { MdAdsClick } from "react-icons/md";
import { State } from "../types";

const BestScore = ({ bestscore }: { bestscore: State["bestscore"] }) => (
  <div className="moves with-icon">
    <MdAdsClick /> Bestscore: {bestscore ? bestscore : "-"}
  </div>
);

export default memo(BestScore);
