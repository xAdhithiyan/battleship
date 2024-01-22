import { playerBoard, computerBoard } from './players';
import { updateDOM, removeAllEventListners } from './updateDOM';

// obtained using DOM
function playerCordFun(e) {
  e.target.removeEventListener('click', clickHandler);
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

    // function to update DOM
    updateDOM(playerBoard, computerBoard, playerCord, this);
  }

  function checkGame() {
    if (!playerSunkShips.length) {
      removeAllEventListners(clickHandler);
      return [true, 'Computer wins'];
    }
    if (!computerSunkShips.length) {
      removeAllEventListners(clickHandler);
      return [true, 'Player wins '];
    }
    return false;
  }

  return {
    playOnce,
    checkGame,
  };
})();

export const clickHandler = (e) => {
  playGame.playOnce(e);
  playGame.checkGame();
};

export default playGame;
