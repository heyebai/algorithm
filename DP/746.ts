function minCostClimbingStairs(cost: number[]): number {
  if (cost.length <= 1) {
    return 0;
  }
  let curr = cost[1],
    last = cost[0],
    temp = 0;
  for (let i = 2; i < cost.length; i++) {
    temp = curr;
    curr = Math.min(last, curr) + cost[i];
    last = temp;
  }
  return Math.min(curr, last);
}
