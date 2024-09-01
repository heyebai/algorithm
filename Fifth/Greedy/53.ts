function maxSubArray(nums: number[]): number {
  let currSum = 0;
  let result = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    result = Math.max(currSum, result);
    if (currSum < 0) {
      currSum = 0;
    }
  }
  return result;
}
