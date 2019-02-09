function pipe(num, ...fn) {
  for (let i = 0; i < fn.length - 1; i++) {
    let piper = fn[i];
    num = piper(num);
  }
  return num;
}
function addOne(x) {
  return x + 1;
}
pipe(1, addOne, addOne);