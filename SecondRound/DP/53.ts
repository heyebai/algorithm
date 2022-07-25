function maxSubArray(nums: number[]): number {
  const dp: number[] = new Array(nums.length).fill(0);
  let max = nums[0];
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    max = Math.max(max, dp[i]);
  }
  return max;
}
