import ships from './ships.js';

// eslint-disable-next-line
const gameboard = function () {
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

  // to check if ships have the
  function checkPlaceShip(coordinates, newShip) {
    if (newShip.direction === 'horizontal' && coordinates[1] + newShip.len > 10) {
      return false;
    }
    if (newShip.direction === 'vertical' && coordinates[0] + newShip.len > 10) {
      return false;
    }

    for (let i = 0; i < newShip.len; i++) {
      if (newShip.direction === 'horizontal') {
        if (board[coordinates[0]][coordinates[1] + i] !== 0) {
          return false;
        }
      } else if (newShip.direction === 'vertical') {
        if (board[coordinates[0] + i][coordinates[1]] !== 0) {
          return false;
        }
      }
    }
    return true;
  }

  // to place a ship on the gameboard
  function placeShip(len, coordinates, direction) {
    const newShip = ships(len, shipArr, direction);

    if (checkPlaceShip(coordinates, newShip)) {
      shipArr.push(newShip);
      if (newShip.direction === 'horizontal' && coordinates[1] + newShip.len <= 10) {
        for (let i = 0; i < newShip.len; i++) {
          board[coordinates[0]][coordinates[1] + i] = newShip.id;
        }
      } else if (newShip.direction === 'vertical' && coordinates[0] + newShip.len <= 10) {
        for (let i = 0; i < newShip.len; i++) {
          board[coordinates[0] + i][coordinates[1]] = newShip.id;
        }
      }
    } else {
      // ship is not placed
      return false;
    }
    return 1;
  }
  function receiveAttack(coordinate) {
    const grid = board[coordinate[0]][coordinate[1]];
    const arr = shipArr.filter((item) => item.id === grid);
    if (arr.length) {
      arr.forEach((item) => {
        if (item.id === grid) {
          item.hitOnce();
          board[coordinate[0]][coordinate[1]] = 'h';
        }
      });
    } else {
      // missed shot
      board[coordinate[0]][coordinate[1]] = 'm';
    }
  }

  return {
    displayBoard,
    displayShipArr,
    placeShip,
    receiveAttack,
  };
};

export default gameboard;
