function minSubArrayLen(target: number, nums: number[]): number {
  if (!nums.length) return 0;
  let slow = 0,
    sum = 0;
  let res = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      if (i - slow + 1 < res) {
        res = i - slow + 1;
      }
      sum -= nums[slow++];
    }
  }
  return res === Number.MAX_SAFE_INTEGER ? 0 : res;
}
