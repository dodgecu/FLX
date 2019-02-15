function userCard(num) {
  const card = {
    key: num,
    balance: 100,
    transactionLimit: 100
  };
  const log = {
    historyLogs: [],
    date: new Date().toLocaleString('en-GB'),
    registerLog: function (type, credits, time) {
      this.historyLogs.push({
        operationType: type,
        credits: credits,
        operationTime: time
      });
    }
  };

  const cardMethods = {
    getCardOptions: function () {
      return Object.assign(card, { historyLogs: log.historyLogs });
    },
    putCredits: function (creditsIn) {
      card.balance += creditsIn;
      log.registerLog('Received credits', creditsIn, log.date);
    },
    takeCredits: function (creditsOut) {
      if (creditsOut <= card.balance && creditsOut <= card.transactionLimit) {
        card.balance -= creditsOut;
      } else {
        console.error(
          `Aborted! Make sure the requested amount: ${creditsOut} 
           does not exceed available balance: ${card.balance} 
           or transaction limit: ${card.transactionLimit}`
        );
      }
      log.registerLog('Withdrawal of credits', creditsOut, log.date);
    },
    setTransactionLimit: function (limit) {
      card.transactionLimit = limit;
      log.registerLog('Transaction limit change', limit, log.date);
    },
    transferCredits: function (credits, targetCard) {
      const transactionTax = 0.005;
      const transfer = credits * transactionTax + credits;
      if (transfer <= card.balance && transfer <= card.transactionLimit) {
        this.takeCredits(transfer);
        targetCard.putCredits(credits);
      } else {
        console.error(
          `Aborted! Make sure the requested amount: ${credits} 
           does not exceed available balance: ${card.balance} 
           or transaction limit: ${card.transactionLimit}`
        );
      }
    }
  };
  return cardMethods;
}

class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.cardsNum = 3;
  }
  addCard() {
    this.cards.length < this.cardsNum
      ? this.cards.push(userCard(this.cards.length + 1))
      : console.error(`Card limit exceeded ${this.cardsNum}`);
  }
  getCardByKey(key) {
    return key > this.cardsNum
      ? `Card not found`
      : this.cards[key - 1];
  }
}
// let user = new UserAccount('Bob');
// user.addCard();
// user.addCard();

// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);

// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);

// card2.takeCredits(50);

// console.log(card1.getCardOptions());
