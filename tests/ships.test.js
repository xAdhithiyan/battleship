import ships from '../src/ships';

describe('ship creation', () => {
  const obj = ships(4, []);

  it('test ship object structure', () => {
    expect(obj).toHaveProperty('id');
    expect(obj).toHaveProperty('len', 4);
    expect(obj).toHaveProperty('hits', 0);
    expect(obj).toHaveProperty('sunk', false);
    expect(obj).toHaveProperty('hitOnce');
  });

  it('test ship hits and sunk', () => {
    for (let i = 0; i < obj.len; i++) {
      expect(obj.hits + 1).toBe(obj.hitOnce());
    }
    expect(obj.sunk).toBe(true);
  });
});
