import gameboard from '../src/gameboard';

const gboard = gameboard();

describe('gboard creation', () => {
  it('test placing ships horizontally', () => {
    const len = 3;
    const coordinates = [1, 2];
    gboard.placeShip(len, coordinates, 'horizontal');
    for (let i = 0; i < len; i++) {
      expect(gboard.displayBoard()[coordinates[0]][coordinates[1] + i]).toBe(
        gboard.displayShipArr()[gboard.displayShipArr().length - 1].id
      );
    }
  });

  it('test placing ships vertical', () => {
    const len = 3;
    const coordinates = [0, 1];
    gboard.placeShip(len, coordinates, 'vertical');

    for (let i = 0; i < len; i++) {
      expect(gboard.displayBoard()[coordinates[0] + i][coordinates[1]]).toBe(
        gboard.displayShipArr()[gboard.displayShipArr().length - 1].id
      );
    }
  });

  it('test placing ships on other ships', () => {
    const len = 3;
    const coordinates = [0, 1];
    expect(gboard.placeShip(len, coordinates, 'vertical')).toBe(false);
  });

  it('test recieveing an attack', () => {
    const len = 3;
    // testing 3 attacks horizontally
    const attackCord = [0, 1];
    for (let i = 0; i < len; i++) {
      expect(gboard.displayShipArr()[gboard.displayShipArr().length - 1].sunk).toBe(false);
      gboard.receiveAttack([attackCord[0] + i, attackCord[1]]);
    }
    expect(gboard.displayShipArr()[gboard.displayShipArr().length - 1].sunk).toBe(true);

    // to test missed shot
    gboard.receiveAttack([9, 9]);
    expect(gboard.displayBoard()[9][9]).toBe('m');

    console.log(gboard.displayBoard());
  });
});
