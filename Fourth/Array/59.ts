function generateMatrix(n: number): number[][] {
  const res: number[][] = new Array(n).fill(0).map((_) => new Array(n));
  const isOdd = n % 2 === 1 ? true : false;
  const times = ~~(n / 2);
  let temp = 1;
  for (let i = 0; i < times; i++) {
    let x = 0 + i,
      y = 0 + i;
    // left to right
    while (y < n - 1 - i) {
      res[x][y++] = temp++;
    }
    // top to bottom
    while (x < n - 1 - i) {
      res[x++][y] = temp++;
    }
    // right to left
    while (y > i) {
      res[x][y--] = temp++;
    }
    // bottom to top
    while (x > i) {
      res[x--][y] = temp++;
    }
  }
  if (isOdd) {
    res[times][times] = temp;
  }
  return res;
}
