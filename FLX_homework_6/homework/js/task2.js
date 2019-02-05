function calculateDiscount() {
  const total = parseFloat(prompt("Please, specify the amount of money", "0"));
  const discount = parseFloat(prompt("Please, specify the discount", "0"));

  if (
    !isNaN(total) &&
    !isNaN(discount) &&
    (total >= 0 && discount >= 0 && (total <= 9999999 && discount < 99))
  ) {
    const savings = (total / 100) * discount;
    const discounted = total - savings;
    return `
        Price without discount: ${+total.toFixed(2)} 
        Discount: ${+discount.toFixed(2)}%
        Price with discount: ${+discounted.toFixed(2)}
        Saved: ${+savings.toFixed(2)}`;
  } else {
    return "Invalid input data";
  }
}
alert(calculateDiscount());
