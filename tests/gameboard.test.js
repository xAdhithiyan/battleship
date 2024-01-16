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
});
