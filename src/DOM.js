import elFactory from './elFactory';
import { playerBoard, computerBoard } from './players';
import { clickHandler } from './playGame';
import githubImg from '../assets/github.svg';

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

  // footer
  const mainFooter = elFactory('div', { class: 'footer' }, '');
  mainFooter.appendChild(elFactory('div', {}, 'Made by Adhithiyan'));
  const anchor = elFactory('a', { href: 'https://github.com/xAdhithiyan', target: '_blank' }, '');
  anchor.appendChild(elFactory('img', { src: githubImg }, ''));
  mainFooter.appendChild(anchor);
  parentDiv.appendChild(mainFooter);
}

export default DOM;
