function numTrees(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = 2 * dp[i - 1];
    for (let j = 1; j < i - 1; j++) {
      dp[i] += dp[j] * dp[i - 1 - j];
    }
  }
  console.log(dp);
  return dp[n];
}
