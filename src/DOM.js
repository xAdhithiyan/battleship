import elFactory from './elFactory';
import { players, computer } from './players';

function DOM() {
  const parentDiv = document.querySelector('body');
  const playerBoard = players();
  const computerBoard = computer();

  const playerDiv = elFactory('div', { class: 'player' }, '');
  const computerDiv = elFactory('div', { class: 'computer' }, '');
  for (let i = 0; i < 10; i++) {
    const playerRowDiv = elFactory('div', {}, '');
    const computerRowDiv = elFactory('div', {}, '');
    for (let j = 0; j < 10; j++) {
      playerRowDiv.appendChild(elFactory('div', {}, playerBoard.displayBoard()[i][j]));
      computerRowDiv.appendChild(elFactory('div', {}, computerBoard.displayBoard()[i][j]));
    }
    playerDiv.appendChild(playerRowDiv);
    computerDiv.appendChild(computerRowDiv);
  }
  parentDiv.appendChild(playerDiv);
  parentDiv.appendChild(computerDiv);
}

export default DOM;
