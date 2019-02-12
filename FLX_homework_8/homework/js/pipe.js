function pipe() {
  let num = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    let piper = arguments[i];
    num = piper(num);
  }
  return num;
}
function addOne(x) {
  return x + 1;
}
pipe(
  1,
  addOne,
  addOne
);
