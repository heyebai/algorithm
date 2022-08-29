function minCostClimbingStairs(cost: number[]): number {
  if (cost.length < 2) return Math.min(...cost);
  const dp: number[] = new Array(cost.length).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
}
