function maxProfit(prices: number[]): number {
  if (prices.length < 2) return 0;
  const dp = new Array(2).fill(0).map((_) => new Array(prices.length).fill(0));

  // 0: buy stock
  // 1: most money I have
  // -7 -1 -1
  // 0   0  4

  dp[0][0] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[0][i] = Math.max(dp[0][i - 1], dp[1][i - 1] - prices[i]);
    dp[1][i] = Math.max(prices[i] + dp[0][i - 1], dp[1][i - 1]);
  }
  console.log(dp);
  return dp[1][prices.length - 1];
}
