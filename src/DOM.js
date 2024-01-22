import elFactory from './elFactory';
import { playerBoard, computerBoard, clickHandlerPlayer } from './players';
import { clickHandler } from './playGame';
import githubImg from '../assets/github.svg';
import { mouseOutHandler, mouseOverHandler } from './updateDOM';

function DOM() {
  const parentDiv = document.querySelector('body');

  const playerDiv = elFactory('div', { class: 'player' }, '');
  const computerDiv = elFactory('div', { class: 'computer' }, '');
  computerDiv.appendChild(elFactory('div', { class: 'dummyDiv' }, ''));
  for (let i = 0; i < 10; i++) {
    const playerRowDiv = elFactory('div', {}, '');
    const computerRowDiv = elFactory('div', {}, '');

    for (let j = 0; j < 10; j++) {
      // player board
      const tempComp = elFactory('div', { x: i, y: j }, playerBoard.displayBoard()[i][j]);
      tempComp.addEventListener('click', clickHandlerPlayer);
      tempComp.addEventListener('mouseover', mouseOverHandler);
      tempComp.addEventListener('mouseout', mouseOutHandler);
      playerRowDiv.appendChild(tempComp);

      // computer board
      const temp = elFactory('div', { x: i, y: j }, computerBoard.displayBoard()[i][j]);
      temp.addEventListener('click', clickHandler);
      computerRowDiv.appendChild(temp);
    }
    playerDiv.appendChild(playerRowDiv);
    computerDiv.appendChild(computerRowDiv);
  }
  playerDiv.appendChild(elFactory('div', { class: 'boardInfo' }, '2x Ship - Press r to rotate ship '));
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
