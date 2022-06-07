function lastStoneWeightII(stones: number[]): number {
  let sum = 0;
  for (const n of stones) {
    sum += n;
  }
  const bagSize = Math.ceil(sum / 2);
  const dp = new Array(bagSize + 1).fill(0);
  for (let i = 0; i < stones.length; i++) {
    for (let j = bagSize; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }
  return Math.abs(sum - 2 * dp[bagSize]);
}
