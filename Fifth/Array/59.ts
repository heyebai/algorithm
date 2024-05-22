function generateMatrix(n: number): number[][] {
  let num = 1;
  const result: number[][] = new Array(n)
    .fill(1)
    .map((i) => new Array(n).fill(0));

  const round = Math.floor(n / 2);

  for (let i = 0; i < round; i++) {
    const len = n - 2 * i - 1;
    let x = 0 + i,
      y = 0 + i;
    let temp = y + len;
    while (y < temp) {
      result[x][y++] = num++;
    }
    temp = x + len;
    while (x < temp) {
      result[x++][y] = num++;
    }
    temp = y - len;
    while (y > temp) {
      result[x][y--] = num++;
    }
    temp = x - len;
    while (x > temp) {
      result[x--][y] = num++;
    }
  }
  if (n % 2 === 1) {
    result[round][round] = num;
  }
  return result;
}
