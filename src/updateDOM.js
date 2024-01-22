function updateDOM(playerBoard, computerBoard, playerCord) {
  const playerDiv = document.querySelector('.player').childNodes;
  const computerDiv = document.querySelector('.computer').childNodes;

  console.log(playerCord);
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
        console.log('hi');
        computerRowDiv[j].classList.add('miss');
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

export { updateDOM, removeOneEvent, removeAllEvent };
