function findTargetSumWays(nums: number[], target: number): number {
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  if ((sum - target) % 2 === 1) return 0;
  const bagSize = (sum - target) / 2;
  if (bagSize < 0) return 0;
  const dp: number[] = new Array(bagSize + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = bagSize; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[bagSize];
}
