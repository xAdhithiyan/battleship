function updateDOM(playerBoard, computerBoard) {
  const playerDiv = document.querySelector('.player').childNodes;
  const computerDiv = document.querySelector('.computer').childNodes;

  for (let i = 0; i < 10; i++) {
    const playerRowDiv = playerDiv[i].childNodes;
    const computerRowDiv = computerDiv[i].childNodes;

    for (let j = 0; j < 10; j++) {
      playerRowDiv[j].textContent = playerBoard.displayBoard()[i][j];
      computerRowDiv[j].textContent = computerBoard.displayBoard()[i][j];

      // setting classes
      if (playerBoard.displayBoard()[i][j] === 'h') {
        playerRowDiv[j].classList.add('hit');
      }
      if (playerBoard.displayBoard()[i][j] === 'm') {
        playerRowDiv[j].classList.add('miss');
      }
      if (computerBoard.displayBoard()[i][j] === 'h') {
        computerRowDiv[j].classList.add('hit');
      }
      if (computerBoard.displayBoard()[i][j] === 'm') {
        computerRowDiv[j].classList.add('miss');
      }
    }
  }
}
function updateOnlyPlayer(playerBoard) {
  const playerDiv = document.querySelector('.player').childNodes;
  for (let i = 0; i < 10; i++) {
    const playerRowDiv = playerDiv[i].childNodes;

    for (let j = 0; j < 10; j++) {
      playerRowDiv[j].textContent = playerBoard.displayBoard()[i][j];

      // setting classes
      if (playerBoard.displayBoard()[i][j] === 'h') {
        playerRowDiv[j].classList.add('hit');
      }
      if (playerBoard.displayBoard()[i][j] === 'm') {
        playerRowDiv[j].classList.add('miss');
      }
    }
  }
}

function removeAllEvent(clickHandler, header) {
  const computerDiv = document.querySelector('.computer').childNodes;
  for (let i = 0; i < 10; i++) {
    const computerRowDiv = computerDiv[i].childNodes;
    for (let j = 0; j < 10; j++) {
      computerRowDiv[j].removeEventListener('click', clickHandler);
    }
  }
  const div = document.querySelector('.info');
  div.textContent = header;
}

function removeOneEvent(e, clickHandler) {
  e.target.removeEventListener('click', clickHandler);
}

function removeAllEventsPlayer(clickHandler) {
  const playerDiv = document.querySelector('.player').childNodes;
  for (let i = 0; i < 10; i++) {
    const playerRowDiv = playerDiv[i].childNodes;
    for (let j = 0; j < 10; j++) {
      playerRowDiv[j].removeEventListener('click', clickHandler);
    }
  }

  const div = document.querySelector('.dummyDiv');
  div.remove();
  const header = document.querySelector('.info');
  header.textContent = 'Let The Fight Begin';
}

export { updateDOM, removeOneEvent, removeAllEvent, removeAllEventsPlayer, updateOnlyPlayer };
