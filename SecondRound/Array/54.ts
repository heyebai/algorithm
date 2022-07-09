function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];
  const sideX = matrix[0].length;
  const sideY = matrix.length;
  let loopTimes = ~~(Math.min(sideX, sideY) / 2);
  let startX: number = 0,
    startY: number = 0,
    offset = 1;
  while (loopTimes--) {
    let i: number = startX,
      j: number = startY;
    // from left to right
    for (; i < sideX - offset; i++) {
      res.push(matrix[j][i]);
    }
    // from top to bottom
    for (; j < sideY - offset; j++) {
      res.push(matrix[j][i]);
    }
    // from right to left
    for (; i > startX; i--) {
      res.push(matrix[j][i]);
    }
    // from bottom to top
    for (; j > startY; j--) {
      res.push(matrix[j][i]);
    }
    offset++;
    startY++;
    startX++;
  }
  if (sideX % 2 === 1 && sideX <= sideY) {
    for (let i = startY; i <= sideY - offset; i++) {
      res.push(matrix[i][startX]);
    }
  } else if (sideY % 2 === 1 && sideY <= sideX) {
    for (let i = startX; i <= sideX - offset; i++) {
      res.push(matrix[startY][i]);
    }
  }
  return res;
}
