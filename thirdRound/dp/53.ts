function maxSubArray(nums: number[]): number {
  const dp: number[] = new Array(nums.length + 1).fill(0);
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i <= nums.length; i++) {
    dp[i] = Math.max(nums[i - 1], dp[i - 1] + nums[i - 1]);
    max = Math.max(max, dp[i]);
  }
  return max;
}
