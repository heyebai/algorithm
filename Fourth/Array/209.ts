function minSubArrayLen(target: number, nums: number[]): number {
  if (nums.length === 0) return 0;
  let left = 0,
    right = 0,
    sum = 0,
    len = Number.MAX_SAFE_INTEGER;
  while (right < nums.length) {
    sum += nums[right];
    while (sum >= target) {
      len = Math.min(len, right - left + 1);
      sum -= nums[left++];
    }
    right++;
  }
  return len === Number.MAX_SAFE_INTEGER ? 0 : len;
}
