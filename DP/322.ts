function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0;
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (const c of coins) {
    for (let i = c; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - c] + 1);
    }
  }
  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
}
