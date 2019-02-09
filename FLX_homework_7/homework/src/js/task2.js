const globals = {
  tries: 3,
  bid: 10,
  prize: 0,
  defaultRange: 5
};

let mutated = Object.assign({}, globals);
let gameOn = true;
if (confirm("Do you want to play a game?")) {
  while (gameOn) {
    const winningNum = Math.floor(Math.random() * mutated.defaultRange);
    gameOn = false;
    for (
      let attempts = mutated.tries, currentBid = mutated.bid;
      attempts > 0;
      attempts--, currentBid = Math.floor(currentBid / 2)
    ) {
      const guess = parseInt(
        prompt(`
            Enter a number from 0 to ${mutated.defaultRange}
            Attempts left: ${attempts}
            Total prize: ${mutated.prize}$
            Possible prize on current attempt: ${currentBid}$
          `)
      );
      if (guess === winningNum) {
        mutated.prize += currentBid;
        mutated.defaultRange += mutated.defaultRange;
        mutated.bid *= 3;
        if (
          confirm(`
            Congratulation! Your prize is: ${mutated.prize}$.
            Do you want to continue?`)
        ) {
          gameOn = true;
          break;
        } else {
          alert(`Thank you for a game. Your prize is: ${mutated.prize}$`);
          if (confirm("Do you want to play again?")) {
            mutated.prize = globals.prize;
            mutated.defaultRange = globals.defaultRange;
            mutated.bid = globals.bid;
            gameOn = true;
            break;
          }
          break;
        }
      } else if (isNaN(guess)) {
        alert("You did not become a millionaire, but can.");
        break;
      } else if (attempts <= 1) {
        alert(`Thank you for a game. Your prize is: ${mutated.prize}$`);
        mutated.prize = globals.prize;
        mutated.defaultRange = globals.defaultRange;
        mutated.bid = globals.bid;
        gameOn =
          confirm("Do you want to play again?") ||
          alert("You did not become a millionaire, but can.");
      }
    }
  }
} else {
  alert("You did not become a millionaire, but can.");
}
