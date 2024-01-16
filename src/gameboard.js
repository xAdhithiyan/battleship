import ships from './ships.js';

// eslint-disable-next-line
const gameboard = (function () {
  const board = [];
  const shipArr = [];

  for (let i = 0; i < 10; i++) {
    const arr = [];
    for (let j = 0; j < 10; j++) {
      arr.push(0);
    }
    board.push(arr);
  }

  // to display the board
  function displayBoard() {
    return board;
  }

  // to view all the ships
  function displayShipArr() {
    return shipArr;
  }

  // to place a ship on the gameboard
  function placeShip(len, coordinates, direction) {
    const newShip = ships(len, shipArr, direction);
    shipArr.push(newShip);

    if (
      newShip.direction === 'horizontal' &&
      coordinates[1] + newShip.len < 10
    ) {
      for (let i = 0; i < newShip.len; i++) {
        board[coordinates[0]][coordinates[1] + i] = newShip.id;
      }
    } else if (
      newShip.direction === 'vertical' &&
      coordinates[0] + newShip.len < 10
    ) {
      for (let i = 0; i < newShip.len; i++) {
        board[coordinates[0] + i][coordinates[1]] = newShip.id;
      }
    } else {
      // ship is not placed
      return 0;
    }
    return 1;
  }

  return {
    displayBoard,
    displayShipArr,
    placeShip,
  };
})();

export default gameboard;
