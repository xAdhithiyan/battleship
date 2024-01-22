import gameboard from './gameboard';
import { removeAllEventsPlayer, updateOnlyPlayer } from './updateDOM';

// obtained using DOM
function players() {
  const gBoardPlayer = gameboard();

  // for vertical or horizontal
  // eslint-disable-next-line
  let count = 0;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R') {
      count += 1;
    }
  });

  function createAShip(e) {
    if (gBoardPlayer.displayShipArr().length < 5) {
      const len = gBoardPlayer.displayShipArr().length === 4 ? 5 : gBoardPlayer.displayShipArr().length + 2;
      const xCord = +e.target.getAttribute('x');
      const yCord = +e.target.getAttribute('y');
      const direction = count % 2 === 0 ? 'horizontal' : 'vertical';
      const condition = gBoardPlayer.placeShip(len, [xCord, yCord], direction);
      if (condition) {
        updateOnlyPlayer(gBoardPlayer, len);
      }
    }
    if (gBoardPlayer.displayShipArr().length === 5) {
      removeAllEventsPlayer(clickHandlerPlayer);
    }
  }

  return {
    gBoardPlayer,
    createAShip,
  };
}

function computer() {
  const gBoardComp = gameboard();
  while (gBoardComp.displayShipArr().length < 5) {
    const len = gBoardComp.displayShipArr().length === 4 ? 5 : gBoardComp.displayShipArr().length + 2;
    const xCord = Math.floor(Math.random() * 9);
    const yCord = Math.floor(Math.random() * 9);
    const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    gBoardComp.placeShip(len, [xCord, yCord], direction);
  }

  return gBoardComp;
}

function clickHandlerPlayer(e) {
  playerBoardArea.createAShip(e);
}

const playerBoardArea = players();
const playerBoard = playerBoardArea.gBoardPlayer;
const computerBoard = computer();
export { playerBoard, computerBoard, clickHandlerPlayer };
