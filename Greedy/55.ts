function canJump(nums: number[]): boolean {
  let path: number = 0;
  if (nums.length === 1) return true;
  for (let i = 0; i <= path; i++) {
    path = Math.max(i + nums[i], path);
    if (path >= nums.length - 1) return true;
  }
  return false;
}
