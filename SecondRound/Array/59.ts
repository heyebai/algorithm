function generateMatrix(n: number): number[][] {
  const res = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let loopTimes = ~~(n / 2);
  let startX = 0,
    startY = 0;
  let x = 1,
    mid = ~~(n / 2),
    offset = 1;
  while (loopTimes > 0) {
    let i = startX,
      j = startY;
    // from left to right
    for (; i < n - offset; i++) {
      res[j][i] = x++;
    }
    // from top to bottom
    for (; j < n - offset; j++) {
      res[j][i] = x++;
    }
    // from right to left
    for (; i > startX; i--) {
      res[j][i] = x++;
    }
    // from top to bottom
    for (; j > startY; j--) {
      res[j][i] = x++;
    }
    loopTimes--;
    startY++;
    startX++;
    offset++;
  }
  if (n % 2 === 1) {
    res[mid][mid] = x;
  }
  return res;
}
