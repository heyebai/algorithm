function maxSubArray(nums: number[]): number {
  let max = Number.MIN_SAFE_INTEGER;
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
    curr += nums[i];
    max = Math.max(curr, max);
    if (curr < 0) {
      curr = 0;
    }
  }
  return max;
}

function maxSubArray1(nums: number[]): number {
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...dp);
}
