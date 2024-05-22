function minSubArrayLen(target: number, nums: number[]): number {
  let right = 0,
    left = 0;
  let sum = 0;
  let result = Number.MAX_SAFE_INTEGER;
  while (right < nums.length) {
    sum += nums[right++];

    while (sum >= target) {
      result = Math.min(result, right - left);
      sum -= nums[left++];
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}
