import gameboard from '../src/gameboard';

describe('gameboard creation', () => {
  it('test placing ships horizontally', () => {
    const len = 3;
    const coordinates = [1, 2];
    gameboard.placeShip(len, coordinates, 'horizontal');
    for (let i = 0; i < len; i++) {
      expect(gameboard.displayBoard()[coordinates[0]][coordinates[1] + i]).toBe(
        gameboard.displayShipArr()[gameboard.displayShipArr().length - 1].id
      );
    }
  });

  it('test placing ships vertical', () => {
    const len = 3;
    const coordinates = [0, 1];
    gameboard.placeShip(len, coordinates, 'vertical');

    for (let i = 0; i < len; i++) {
      expect(gameboard.displayBoard()[coordinates[0] + i][coordinates[1]]).toBe(
        gameboard.displayShipArr()[gameboard.displayShipArr().length - 1].id
      );
    }
  });

  it('test placing ships on other ships', () => {
    const len = 3;
    const coordinates = [0, 1];
    expect(gameboard.placeShip(len, coordinates, 'vertical')).toBe(false);
  });

  it('test recieveing an attack', () => {
    const len = 3;
    // testing 3 attacks horizontally
    const attackCord = [0, 1];
    for (let i = 0; i < len; i++) {
      expect(gameboard.displayShipArr()[gameboard.displayShipArr().length - 1].sunk).toBe(false);
      gameboard.receiveAttack([attackCord[0] + i, attackCord[1]]);
    }
    expect(gameboard.displayShipArr()[gameboard.displayShipArr().length - 1].sunk).toBe(true);
    // to test missed shot
    gameboard.receiveAttack([9, 9]);
    expect(gameboard.displayBoard()[9][9]).toBe('m');
  });
});
