function numSquares(n: number): number {
  const dp: number[] = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  const root = ~~Math.pow(n, 0.5);
  for (let i = 1; i <= root; i++) {
    for (let j = i * i; j < dp.length; j++) {
      dp[j] = Math.min(dp[j], dp[j - i * i] + 1);
    }
  }
  return dp[n];
}
