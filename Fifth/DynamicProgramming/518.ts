function change(amount: number, coins: number[]): number {
  const dp = new Array(amount + 1).fill(0);
  // 12
  // 12 21
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j >= coins[i]) {
        dp[j] += dp[j - coins[i]];
      }
    }
  }
  return dp[amount];
}
