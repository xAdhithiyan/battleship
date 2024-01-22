import { players, computer } from './players';

export const playerBoard = players();
export const computerBoard = computer();

// obtained using DOM
export function playerCordFun(e) {
  console.log(e.target.getAttribute('x'), e.target.getAttribute('y'));
  return [e.target.getAttribute('x'), e.target.getAttribute('y')];
}

function computerCordFun() {
  const xCord = Math.floor(Math.random() * 10);
  const yCord = Math.floor(Math.random(0) * 10);
  return [xCord, yCord];
}

const playGame = (() => {
  let playerSunkShips = playerBoard.displayShipArr().filter((ship) => ship.sunk === false);
  let computerSunkShips = computerBoard.displayShipArr().filter((ship) => ship.sunk === false);

  function playOnce(e) {
    // computer gets hits
    const playerCord = playerCordFun(e);
    computerBoard.receiveAttack(playerCord);

    // player gets hit
    console.log(computerBoard.displayBoard());
    let computerCord = computerCordFun();
    while (
      playerBoard.displayBoard()[computerCord[0]][computerCord[1]] === 'm' ||
      playerBoard.displayBoard()[computerCord[0]][computerCord[1]] === 'h'
    ) {
      computerCord = computerCordFun();
    }
    playerBoard.receiveAttack(computerCord);

    playerSunkShips = playerBoard.displayShipArr().filter((ship) => ship.sunk === false);
    computerSunkShips = computerBoard.displayShipArr().filter((ship) => ship.sunk === false);
  }

  function checkGame() {
    if (!playerSunkShips.length) {
      return [true, 'Computer wins'];
    }
    if (!computerSunkShips.length) {
      return [true, 'Player wins '];
    }
    return false;
  }

  return {
    playOnce,
    checkGame,
  };
})();

export default playGame;
