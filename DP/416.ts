function canPartition(nums: number[]): boolean {
  let sum = 0;
  for (const n of nums) {
    sum += n;
  }
  if (sum % 2 === 1) return false;
  sum /= 2;
  const dp: number[] = new Array(sum + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = sum; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
      if (dp[j] === sum) return true;
    }
  }
  return false;
}
