function reverseNumber(n) {
  const str = n.toString();
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return parseInt(reversed) * Math.sign(n);
}
reverseNumber(-456);
