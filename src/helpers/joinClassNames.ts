const joinClassNames = (...args: (string | boolean)[]) =>
  args.filter(Boolean).join(" ");

export default joinClassNames;
