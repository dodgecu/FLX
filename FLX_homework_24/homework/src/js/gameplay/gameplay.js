import { game } from '../game/game';

import { ui } from '../ui/ui';

const loadGame = function(e) {
  if (e.target.classList.contains('game__play')) {
    document.querySelector('.game__rules').classList.add('removed');
    e.target.classList.remove('game__play');
    e.target.classList.add('game__reset');
    e.target.value = 'Reset';
    setTimeout(() => ui.renderLayout(), 300);
  }
};

const play = function(e) {
  if (e.target.parentElement.className === 'options__paper') {
    game.play(e.target.parentElement.dataset.option);
    ui.renderGameResults(game.gameData());
  } else if (e.target.parentElement.className === 'options__scissors') {
    game.play(e.target.parentElement.dataset.option);
    ui.renderGameResults(game.gameData());
  } else if (e.target.parentElement.className === 'options__rock') {
    game.play(e.target.parentElement.dataset.option);
    ui.renderGameResults(game.gameData());
  }
};

const reset = function(e) {
  if (e.target.classList.contains('game__reset')) {
    game.reset();
    ui.renderLayout();
  }
};

export { loadGame, play, reset };
