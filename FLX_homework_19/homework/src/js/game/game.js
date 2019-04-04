class Game {
  constructor() {
    this.userChoice;
    this.choices = ["rock", "paper", "scissors"];
    this.computerChoice = "";
    this.rounds = 0;
    this.yourScore = 0;
    this.computerScore = 0;
  }

  map() {
    return this.choices.reduce((obj, choice, i, that) => {
      obj[choice] = {};
      obj[choice][choice] = `A Tie`;
      obj[choice][that[(i + 1) % 3]] = `${
        this.userChoice === that[(i + 1) % 3] ? "You've WON" : "You've LOST"
      }`;
      obj[choice][that[(i + 2) % 3]] = `${
        this.userChoice === choice ? "You've WON" : "You've LOST"
      }`;
      return obj;
    }, {});
  }

  randomChoice() {
    this.computerChoice = this.choices[Math.floor(Math.random() * 3)];
  }

  play(choice) {
    this.userChoice = choice;
    this.rounds++;
    this.randomChoice();
    if (this.map()[this.userChoice][this.computerChoice] === "You've WON") {
      this.yourScore++;
    } else if (
      this.map()[this.userChoice][this.computerChoice] === "You've LOST"
    ) {
      this.computerScore++;
    }
  }

  reset() {
    this.userChoice = null;
    this.computerChoice = null;
    this.rounds = 0;
    this.yourScore = 0;
    this.computerScore = 0;
  }

  gameData() {
    return {
      round: this.rounds,
      winner: this.map()[this.userChoice][this.computerChoice],
      you: this.userChoice,
      computer: this.computerChoice,
      yourScore: this.yourScore,
      computerScore: this.computerScore
    };
  }
}
