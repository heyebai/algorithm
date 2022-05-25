function maxSubArray(nums: number[]): number {
  let res = Number.MIN_SAFE_INTEGER;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    temp += nums[i];
    if (temp > res) {
      res = temp;
    }
    if (temp < 0) {
      temp = 0;
    }
  }
  return res;
}
