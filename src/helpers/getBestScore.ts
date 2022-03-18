import { State } from "./../types";

const getBestScore = (): State["bestscore"] => {
  let lsBestScore = Number(localStorage.getItem("bestscore"));
  return lsBestScore ? lsBestScore : null;
};

export default getBestScore;
