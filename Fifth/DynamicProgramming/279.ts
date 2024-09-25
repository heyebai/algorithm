function numSquares(n: number): number {
  const per = Math.floor(Math.sqrt(n));
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 1; i <= per; i++) {
    const power = i * i;
    for (let j = power; j <= n; j++) {
      if (dp[j - power] === Number.MAX_SAFE_INTEGER) continue;
      dp[j] = Math.min(dp[j], dp[j - power] + 1);
    }
  }
  return dp[n];
}
