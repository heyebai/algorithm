function rob(nums: number[]): number {
  const dp = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length; j > i; j--) {
      let max = 0;
      for (let m = 0; m < i; m++) {
        if (dp[m] > max) {
          max = dp[m];
        }
      }
      dp[j] = max + nums[i];
    }
  }
  let max = 0;
  for (const n of dp) {
    if (n > max) {
      max = n;
    }
  }
  return max;
}

function rob1(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  const dp = new Array(nums.length).fill(nums[0]);
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
}
