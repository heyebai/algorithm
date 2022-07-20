function canJump(nums: number[]): boolean {
  if (nums.length < 2) return true;
  let i = 0;
  let step = nums[0];
  while (i <= step) {
    if (i + nums[i] > step) {
      step = i + nums[i];
    }
    if (step >= nums.length - 1) return true;
    i++;
  }
  return false;
}
