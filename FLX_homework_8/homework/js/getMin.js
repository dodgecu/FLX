function getMin() {
  let minNum = arguments[0];
  for (let i = 0; i < arguments.length - 1; i++) {
    if (minNum > arguments[i]) {
      minNum = arguments[i];
    }
  }
  return minNum;
}
getMin(3, 0, -3);
