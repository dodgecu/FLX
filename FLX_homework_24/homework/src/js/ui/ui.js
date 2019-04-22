class UI {
  constructor() {
    this.main = document.querySelector('.game');
    this.maxRounds = 3;
  }

  renderLayout() {
    this.main.innerHTML = `
    <div class="game__main">
      <div class="results">
        Your BET!
      </div>
      <div class="options">
        <div class="options__paper" data-option="paper">
          <img src="./img/paper.png" alt="" />
        </div>
        <div class="options__scissors" data-option="scissors">
          <img src="./img/scissors.png" alt="" />
        </div>
        <div class="options__rock" data-option="rock">
          <img src="./img/rock.png" alt="" />
        </div>
      </div>
    </div>
    `;
  }

  renderGameResults(gameData) {
    const location = document.querySelector('.results');
    const { round, winner, you, computer, yourScore, computerScore } = gameData;
    location.innerHTML = `
        <div class="results__round">
          <span class="results__round--round">Round ${round}:</span>
        </div>
        <div class="results__choices">
          <span class="results__choices--choice">${you} vs ${computer}</span>
        </div>
        <div class="results__winner">
          <span class="results__choices--winner">${winner}</span>
        </div>
        <div class="results__final"></div>
      `;
    const score = `${yourScore} : ${computerScore}`;
    let winningUser;
    if (yourScore > computerScore) {
      winningUser = `You have won with the score ${score}`;
    } else if (yourScore === computerScore) {
      winningUser = `It's a TIE. Scores: ${score}`;
    } else {
      winningUser = `You have lost with the score ${score}`;
    }
    if (round >= this.maxRounds) {
      document.querySelector('.options').classList.add('done');
      document.querySelector('.results__final').innerHTML = `
        <p class="results__over">Game Over!</p>
        <p class="results__winner">${winningUser}</p>
      `;
    }
  }
}

export const ui = new UI();
