function findTargetSumWays(nums: number[], target: number): number {
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  if ((sum + target) % 2 === 1) {
    return 0;
  }
  if (sum < Math.abs(target)) {
    return 0;
  }
  const bag = (sum + target) / 2;
  const dp: number[] = new Array(bag + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = bag; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[bag];
}
