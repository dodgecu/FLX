function isBigger(a, b) {
  return a > b;
}
function isSmaller(a, b) {
  return isBigger(b, a);
}
isSmaller(5, -1);
