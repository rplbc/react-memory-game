import cuid from "cuid";

const emojis = [
  "😃",
  "😁",
  "😅",
  "😂",
  "😇",
  "😌",
  "😍",
  "😎",
  "🥸",
  "🥳",
  "😭",
  "🤬",
  "🤯",
  "🥶",
  "😱",
  "🤔",
  "🥴",
  "🤢",
  "😷",
  "🤑",
  "🤠",
  "👿",
  "👹",
  "👺",
  "🤡",
  "💩",
  "👻",
  "💀",
  "☠️",
  "👽",
  "👾",
  "🤖",
  "🎃",
  "😺",
];

const shuffle = <T>(arr: T[]) => {
  const newArr = [...arr];

  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
};

export const makeCards = (n: number, list = emojis) => {
  if (n > list.length)
    throw new Error(`Amount must be less than ${list.length}`);

  let hold = shuffle(list);
  let ret = [];

  while (ret.length < n) {
    ret.push(hold.shift()); // or pop
  }

  const doubledEmojis = shuffle(
    ret.flatMap((i) => [
      {
        id: cuid(),
        emoji: i,
      },
      {
        id: cuid(),
        emoji: i,
      },
    ])
  );

  return doubledEmojis.reduce(
    (acc, { id, emoji }) => ({
      ...acc,
      [id]: {
        emoji,
        inGame: true,
        reversed: false,
      },
    }),
    {}
  );
};
