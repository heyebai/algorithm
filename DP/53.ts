function maxSubArray(nums: number[]): number {
  const dp = new Array(nums.length + 1).fill(Number.MIN_SAFE_INTEGER);
  for (let i = 1; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i - 1], nums[i - 1]);
  }
  return Math.max(...dp);
}
