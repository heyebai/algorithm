function lastStoneWeightII(stones: number[]): number {
  let sum = 0;
  for (let s of stones) {
    sum += s;
  }
  const target = ~~(sum / 2);
  const dp: number[] = new Array(target + 1).fill(0);
  for (let i = 0; i < stones.length; i++) {
    for (let j = target; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }
  return Math.abs(sum - 2 * dp[target]);
}
