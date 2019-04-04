const game = new Game();

const ui = new UI();

const main = document.querySelector(".main");

main.addEventListener("click", loadGame);
main.addEventListener("click", play);
main.addEventListener("click", reset);

function loadGame(e) {
  if (e.target.classList.contains("game__play")) {
    document.querySelector(".game__rules").classList.add("removed");
    e.target.classList.remove("game__play");
    e.target.classList.add("game__reset");
    e.target.value = "Reset";
    setTimeout(() => ui.renderLayout(), 300);
  }
}

function play(e) {
  if (e.target.parentElement.className === "options__paper") {
    game.play(e.target.parentElement.dataset.option);
    ui.renderGameResults(game.gameData());
  } else if (e.target.parentElement.className === "options__scissors") {
    game.play(e.target.parentElement.dataset.option);
    ui.renderGameResults(game.gameData());
  } else if (e.target.parentElement.className === "options__rock") {
    game.play(e.target.parentElement.dataset.option);
    ui.renderGameResults(game.gameData());
  }
}

function reset(e) {
  if (e.target.classList.contains("game__reset")) {
    game.reset();
    ui.renderLayout();
  }
}
