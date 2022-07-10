function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) return [];
  const sideX = matrix[0].length,
    sideY = matrix.length;
  let loopTimes = ~~(Math.min(sideX, sideY) / 2);
  let startX = 0,
    startY = 0,
    offset = 1;
  const result: number[] = [];
  while (loopTimes--) {
    let i = startY,
      j = startX;
    // from left to right
    for (; j < sideX - offset; j++) {
      result.push(matrix[i][j]);
    }
    // from top to bottom
    for (; i < sideY - offset; i++) {
      result.push(matrix[i][j]);
    }
    // from right to left
    for (; j > startX; j--) {
      result.push(matrix[i][j]);
    }
    // from bottom to top
    for (; i > startY; i--) {
      result.push(matrix[i][j]);
    }
    startY++;
    startX++;
    offset++;
  }
  if (sideX % 2 === 1 && sideX <= sideY) {
    for (let i = startY; i <= sideY - offset; i++) {
      result.push(matrix[i][startX]);
    }
  } else if (sideY % 2 === 1 && sideY <= sideX) {
    for (let i = startX; i <= sideX - offset; i++) {
      result.push(matrix[startY][i]);
    }
  }
  return result;
}
