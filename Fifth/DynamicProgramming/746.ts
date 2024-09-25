function minCostClimbingStairs(cost: number[]): number {
  if (cost.length < 2) {
    return Math.min(...cost);
  }
  const result = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
    result.push(Math.min(result[i - 1] + cost[i], result[i - 2] + cost[i]));
  }
  return Math.min(result[result.length - 1], result[result.length - 2]);
}
