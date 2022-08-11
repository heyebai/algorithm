function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0,
    right = 0;
  let sum = 0;
  let len = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      len = Math.min(len, i - left + 1);
      sum -= nums[left++];
    }
  }
  return len === Number.MAX_SAFE_INTEGER ? 0 : len;
}
