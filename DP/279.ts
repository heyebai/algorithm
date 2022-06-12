function numSquares(n: number): number {
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 1; i * i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (j >= i * i) {
        dp[j] = Math.min(dp[j], dp[j - i * i] + 1);
      }
    }
  }
  return dp[n];
}
