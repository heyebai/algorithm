function combinationSum4(nums: number[], target: number): number {
  const dp: number[] = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let j = 0; j <= target; j++) {
    for (let i = 0; i < nums.length; i++) {
      if (j >= nums[i]) {
        dp[j] += dp[j - nums[i]];
      }
    }
  }
  return dp[target];
}
