import { players, computer } from './players.js';

let a = 0;

// obtained using DOM
function playerCordFun() {
  a++;
  return [1, 0 + a];
}

function computerCordFun() {
  const xCord = Math.floor(Math.random() * 10);
  const yCord = Math.floor(Math.random(0) * 10);
  return [xCord, yCord];
}

function playGame() {
  const playerBoard = players();
  const computerBoard = computer();

  let playerSunkShips = playerBoard.displayShipArr().filter((ship) => ship.sunk === false);
  let computerSunkShips = computerBoard.displayShipArr().filter((ship) => ship.sunk === false);

  let count = 0;
  while (playerSunkShips.length && computerSunkShips.length) {
    if (count % 2 === 0) {
      const playerCord = playerCordFun();
      computerBoard.receiveAttack(playerCord);
    } else {
      let computerCord = computerCordFun();
      while (
        playerBoard.displayBoard()[computerCord[0]][computerCord[1]] === 'm' ||
        playerBoard.displayBoard()[computerCord[0]][computerCord[1]] === 'h'
      ) {
        computerCord = computerCordFun();
      }
      playerBoard.receiveAttack(computerCord);
    }
    count++;
    playerSunkShips = playerBoard.displayShipArr().filter((ship) => ship.sunk === false);
    computerSunkShips = computerBoard.displayShipArr().filter((ship) => ship.sunk === false);
  }

  console.log('Game ended');

  if (!playerSunkShips.length) {
    console.log('Computer wins');
  } else {
    console.log('Player wins');
  }
}

playGame();
