function jump(nums: number[]): number {
  if (nums.length < 2) return 0;
  if (nums[0] >= nums.length - 1) return 1;
  let result = 1;
  let farestIndex = 0;
  let curr = 0;
  let scope = nums[0];
  while (curr <= scope) {
    farestIndex = Math.max(farestIndex, curr + nums[curr]);
    if (farestIndex >= nums.length - 1) {
      result++;
      break;
    }
    if (curr === scope) {
      scope = farestIndex;
      result++;
    }
    curr++;
  }
  return result;
}
