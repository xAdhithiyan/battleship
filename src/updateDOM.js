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
    }
  }
}

function removeAllEventListners(clickHandler) {
  const computerDiv = document.querySelector('.computer').childNodes;

  for (let i = 0; i < 10; i++) {
    const computerRowDiv = computerDiv[i].childNodes;
    for (let j = 0; j < 10; j++) {
      computerRowDiv[j].removeEventListener('click', clickHandler);
    }
  }
}

export { updateDOM, removeAllEventListners };
