function equate() {
  const a = parseFloat(prompt("Please, specify A value", "0"));
  const b = parseFloat(prompt("Please, specify B value", "0"));
  const c = parseFloat(prompt("Please, specify C value", "0"));

  const calculate = (a, b, c) => {
    let result;
    if (a === 0 || (isNaN(a) || isNaN(b) || isNaN(c))) {
      result = "Invalid input data";
    } else {
      const discriminant = b * b - 4 * a * c;
      if (discriminant === 0) {
        result = `x = ${-b / (2 * a)}`;
      } else if (discriminant > 0) {
        const x1 = (-1 * b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-1 * b - Math.sqrt(discriminant)) / (2 * a);
        result = `x1 = ${x1} and x2 = ${x2}`;
      } else {
        result = "no solution";
      }
    }
    return result;
  };

  return calculate(a, b, c);
}
alert(equate());
