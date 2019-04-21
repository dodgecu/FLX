class User {
  constructor(name, orderTotalPrice, weekendDiscount, nightDiscount, bonus) {
    this.name = name;
    this.orderTotalPrice = orderTotalPrice;
    this.weekendDiscount = weekendDiscount;
    this.nightDiscount = nightDiscount;
    this.bonus = bonus;
  }

  makeOrder() {
    const withDiscount =
      this.orderTotalPrice - this.weekendDiscount - this.nightDiscount;
    return `Price after discount is ${withDiscount} UAH and including bonuses, ${withDiscount -
      this.bonus} UAH.`;
  }
}

const getDiscount = function(user) {
  const time = new Date();
  const nightDiscount = (user.orderTotalPrice * 20) / 100;
  const weekendDiscount = (user.orderTotalPrice * 10) / 100;

  if (time.getHours() < 6) {
    user.nightDiscount = nightDiscount;
    if (time.getDay() === 6 || time.getDay() === 0) {
      user.weekendDiscount = weekendDiscount;
    }
  } else if (time.getDay() === 6 || time.getDay() === 0) {
    user.weekendDiscount = weekendDiscount;
  } else {
    user.nightDiscount = 0;
    user.weekendDiscount = 0;
  }
};

const setBonus = function(user) {
  user.bonus = Math.floor(user.orderTotalPrice / 100) * 5;
};

const roger = new User('Roger', 200, 0, 0, 0);
getDiscount(roger);
setBonus(roger);
console.log(roger.makeOrder());
