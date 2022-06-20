function findLengthOfLCIS(nums: number[]): number {
  let res = 1,
    temp = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      temp++;
    } else {
      if (temp > res) {
        res = temp;
      }
      temp = 1;
    }
  }
  if (temp > res) {
    res = temp;
  }
  return res;
}

function findLengthOfLCIS1(nums: number[]): number {
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
  }
  return Math.max(...dp);
}
