function wiggleMaxLength(nums: number[]): number {
  let res = 0;
  const dp: number[][] = new Array(nums.length)
    .fill(0)
    .map((_) => new Array(2).fill(0));
  dp[0][0] = 1;
  dp[0][1] = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
      }
    }

    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
      }
    }
  }
  console.log(dp);
  return Math.max(...dp[nums.length - 1]);
}
