import cuid from "cuid";
import { data } from "./data";

const shuffle = <T>(arr: T[]) => {
  const newArr = [...arr];

  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
};

export const makeCards = (n: number, list = data) => {
  if (n > list.length)
    throw new Error(`Amount must be less than ${list.length}`);

  let hold = shuffle(list);
  let ret: typeof hold = [];

  while (ret.length < n) {
    ret.push(hold.shift()!); // or pop
  }

  const doubledEmojis = shuffle(
    ret.flatMap((i) => [
      {
        id: cuid(),
        emoji: i.emoji,
        name: i.name,
      },
      {
        id: cuid(),
        emoji: i.emoji,
        name: i.name,
      },
    ])
  );

  return doubledEmojis.reduce(
    (prev, { id, ...data }) => ({
      ...prev,
      [id]: {
        ...data,
        inGame: true,
        reversed: false,
      },
    }),
    {}
  );
};
