function getMin(...args) {
  let minNum = args[0];
  for (let i = 1; i < args.length; i++) {
    if (minNum > args[i]) {
      minNum = args[i];
    }
  }
  return minNum;
}
getMin(3, 0, -3);
