function numTrees(n: number): number {
  if (n === 0) return 0;
  let res = 0;
  const dp = [1];
  for (let j = 1; j <= n; j++) {
    res = 0;
    for (let i = 0; i < ~~(j / 2); i++) {
      res += 2 * (dp[i] * dp[j - i - 1]);
    }
    if (j % 2 === 1) {
      res += dp[(j - 1) / 2] * dp[(j - 1) / 2];
    }
    dp.push(res);
  }
  return dp[n];
}
