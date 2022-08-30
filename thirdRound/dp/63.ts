function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const dp: number[][] = new Array(obstacleGrid.length)
    .fill(0)
    .map((_) => new Array(obstacleGrid[0].length).fill(0));
  for (let i = 0; i < obstacleGrid[0].length; i++) {
    if (obstacleGrid[0][i] === 0) {
      dp[0][i] = 1;
    } else if (obstacleGrid[0][i] === 1) {
      dp[0][i] = -1;
      break;
    }
  }
  for (let i = 0; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] === 0) {
      dp[i][0] = 1;
    } else {
      dp[i][0] = -1;
      break;
    }
  }
  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = -1;
      }
    }
  }
  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      if (dp[i][j] === -1) continue;
      if (dp[i - 1][j] === -1 && dp[i][j - 1] === -1) {
        // do nothing
      } else if (dp[i - 1][j] === -1 || dp[i][j - 1] === -1) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1] + 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[dp.length - 1][dp[0].length - 1] > 0
    ? dp[dp.length - 1][dp[0].length - 1]
    : 0;
}
