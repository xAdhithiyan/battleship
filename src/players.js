import gameboard from './gameboard.js';

// to populate players
function players() {
  const gBoardPlayer = gameboard();

  // the values will be taken from DOM elements
  gBoardPlayer.placeShip(3, [1, 2], 'horizontal');
  gBoardPlayer.placeShip(3, [1, 3], 'horizontal');
  gBoardPlayer.placeShip(5, [3, 3], 'vertical');
  gBoardPlayer.placeShip(2, [8, 8], 'vertical');
  gBoardPlayer.placeShip(2, [7, 5], 'horizontal');
  gBoardPlayer.placeShip(4, [2, 5], 'horizontal');

  console.log(gBoardPlayer.displayShipArr());
  return gBoardPlayer;
}

function computer() {
  const gBoardComp = gameboard();
  while (gBoardComp.displayShipArr().length < 5) {
    const len = Math.floor(Math.random() * 4 + 2);
    const xCord = Math.floor(Math.random() * 9);
    const yCord = Math.floor(Math.random() * 9);
    const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    gBoardComp.placeShip(len, [xCord, yCord], direction);
  }

  return gBoardComp;
}

players();
export { players, computer };
