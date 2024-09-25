const helper = (nums: number[]): number => {
  if (nums.length <= 2) return Math.max(...nums);
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], (dp[i - 2] ?? 0) + nums[i]);
  }
  return dp[dp.length - 1];
};

function rob(nums: number[]): number {
  if (nums.length <= 2) return Math.max(...nums);
  const a = helper(nums.slice(0, nums.length - 1));
  const b = helper(nums.slice(1));
  return Math.max(a, b);
}
