function isBigger(n1, n2) {
  return n1 > n2;
}
function isSmaller(n1, n2) {
  return n1 === n2 ? false : !isBigger(n1, n2);
}
isSmaller(5, -1);
