function ships(len, arr) {
  const id = arr.length + 1;
  const hits = 0;
  const sunk = false;

  // eslint-disable-next-line
  const isSunk = function (obj) {
    obj.sunk = true;
  };

  // eslint-disable-next-line
  const hitOnce = function () {
    if (this.hits <= this.len) {
      this.hits++;
    }
    if (this.hits === this.len) {
      isSunk(this);
    }

    return this.hits;
  };

  return {
    id,
    len,
    hits,
    sunk,
    hitOnce,
  };
}

export default ships;
