function reverseNumber(num) {
  const str = num.toString();
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return parseInt(reversed) * Math.sign(num);
}
reverseNumber(-456);
