function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  if (obstacleGrid[0][0] === 1) return 0;
  let isObstacle = false;
  for (let i = 0; i < obstacleGrid[0].length; i++) {
    if (obstacleGrid[0][i] === 0 && !isObstacle) {
      obstacleGrid[0][i] = 1;
    } else if (obstacleGrid[0][i] === 1) {
      obstacleGrid[0][i] = -1;
      isObstacle = true;
    }
  }
  isObstacle = false;
  for (let i = 1; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] === 0 && !isObstacle) {
      obstacleGrid[i][0] = 1;
    } else if (obstacleGrid[i][0] === 1) {
      obstacleGrid[i][0] = -1;
      isObstacle = true;
    }
  }
  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = -1;
      } else {
        obstacleGrid[i][j] =
          Math.max(0, obstacleGrid[i - 1][j]) +
          Math.max(0, obstacleGrid[i][j - 1]);
      }
    }
  }
  return Math.max(
    obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1],
    0
  );
}
