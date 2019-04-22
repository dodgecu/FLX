import { loadGame, play, reset } from './gameplay/gameplay';

import '../scss/main.scss';

const main = document.querySelector('.main');

main.addEventListener('click', loadGame);
main.addEventListener('click', play);
main.addEventListener('click', reset);
