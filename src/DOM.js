import elFactory from './elFactory';
import { playerBoard, computerBoard } from './players';
import { clickHandler } from './playGame';

function DOM() {
  const parentDiv = document.querySelector('body');

  const playerDiv = elFactory('div', { class: 'player' }, '');
  const computerDiv = elFactory('div', { class: 'computer' }, '');
  for (let i = 0; i < 10; i++) {
    const playerRowDiv = elFactory('div', {}, '');
    const computerRowDiv = elFactory('div', {}, '');

    for (let j = 0; j < 10; j++) {
      playerRowDiv.appendChild(elFactory('div', { x: i, y: j }, playerBoard.displayBoard()[i][j]));

      const temp = elFactory('div', { x: i, y: j }, computerBoard.displayBoard()[i][j]);
      temp.addEventListener('click', clickHandler);

      computerRowDiv.appendChild(temp);
    }
    playerDiv.appendChild(playerRowDiv);
    computerDiv.appendChild(computerRowDiv);
  }
  parentDiv.appendChild(playerDiv);
  parentDiv.appendChild(computerDiv);
}

export default DOM;
