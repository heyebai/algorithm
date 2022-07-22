function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const dp = new Array(obstacleGrid.length)
    .fill(0)
    .map(() => new Array(obstacleGrid[0].length).fill(0));
  for (let i = 0; i < dp.length && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i < dp[0].length && obstacleGrid[0][i] === 0; i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === 1) continue;
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
}
