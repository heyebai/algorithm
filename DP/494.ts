function findTargetSumWays(nums: number[], target: number): number {
  let sum = 0;
  for (const n of nums) {
    sum += n;
  }
  if ((sum + target) % 2 === 1) return 0;
  if (Math.abs(target) > sum) return 0;
  const dp: number[][] = new Array(nums.length + 1)
    .fill(0)
    .map((_) => new Array((sum + target) / 2 + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= nums.length; i++) {
    const temp = nums[i - 1];
    for (let j = 0; j <= (sum + target) / 2; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= temp) {
        dp[i][j] += dp[i - 1][j - temp];
      }
    }
  }
  return dp[nums.length][(sum + target) / 2];
}
