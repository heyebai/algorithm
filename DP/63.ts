function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  if (obstacleGrid[0][0] === 1) return 0;
  if (obstacleGrid.length === 1) {
    for (const n of obstacleGrid[0]) {
      if (n === 1) return 0;
    }
  }
  obstacleGrid[0][0] = -1;

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      const a =
        j < 1 ? 0 : obstacleGrid[i][j - 1] === 1 ? 0 : obstacleGrid[i][j - 1];
      const b =
        i < 1 ? 0 : obstacleGrid[i - 1][j] === 1 ? 0 : obstacleGrid[i - 1][j];
      if (obstacleGrid[i][j] !== 1 && !(i === 0 && j === 0)) {
        obstacleGrid[i][j] = a + b;
      }
    }
  }

  return -obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] < 0
    ? 0
    : -obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
}
