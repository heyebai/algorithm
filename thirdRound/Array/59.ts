function generateMatrix(n: number): number[][] {
  const res: number[][] = new Array(n).fill(0).map((_) => new Array(n).fill(0));
  const loopTimes: number = ~~(n / 2);
  let count = 1;
  let x = 0,
    y = 0;
  for (let i = 0; i < loopTimes; i++) {
    let lenX = n - 1 - i;
    // left to right
    for (; x < lenX; x++) {
      res[y][x] = count++;
    }
    // top to bottom
    for (; y < lenX; y++) {
      res[y][x] = count++;
    }
    // right to left
    for (; x >= 1 + i; x--) {
      res[y][x] = count++;
    }
    // bottom to top
    for (; y >= 1 + i; y--) {
      res[y][x] = count++;
    }
    x++;
    y++;
  }
  if (n % 2 === 1) {
    res[loopTimes][loopTimes] = count;
  }
  return res;
}
