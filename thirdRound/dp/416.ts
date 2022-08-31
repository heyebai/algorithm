function canPartition(nums: number[]): boolean {
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  if (sum % 2 === 1) return false;
  const bagSize = sum / 2;
  const dp: number[] = new Array(bagSize + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = bagSize; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }
  return dp[bagSize] === bagSize;
}
