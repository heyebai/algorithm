function validPartition(nums: number[]): boolean {
  const dp: boolean[] = new Array(nums.length + 1).fill(false);
  dp[0] = true;
  dp[2] = nums[1] === nums[0] ? true : false;
  for (let i = 3; i < dp.length; i++) {
    if (nums[i - 1] === nums[i - 2] && dp[i - 2]) {
      dp[i] = true;
    } else if (
      nums[i - 1] === nums[i - 2] &&
      nums[i - 3] === nums[i - 2] &&
      dp[i - 3]
    ) {
      dp[i] = true;
    } else if (
      nums[i - 1] - nums[i - 2] === 1 &&
      nums[i - 2] - nums[i - 3] === 1 &&
      dp[i - 3]
    ) {
      dp[i] = true;
    }
  }
  return dp[nums.length];
}
