const joinClassNames = (...args: (string | boolean)[]) => {
  return args.filter(Boolean).join(" ");
};

export default joinClassNames;
