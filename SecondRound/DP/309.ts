function maxProfit(prices: number[]): number {
  const dp: number[][] = new Array(prices.length)
    .fill(0)
    .map((_) => new Array(4).fill(0));
  dp[0][0] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(
      dp[i - 1][0],
      Math.max(dp[i - 1][1], dp[i - 1][3]) - prices[i]
    );
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3]);
    dp[i][2] = dp[i - 1][0] + prices[i];
    dp[i][3] = dp[i - 1][2];
  }
  return Math.max(...dp[prices.length - 1]);
}
