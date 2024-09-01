function canJump(nums: number[]): boolean {
  let farthestIndex: number = 0;
  let curr = 0;
  while (curr <= farthestIndex) {
    farthestIndex = Math.max(farthestIndex, curr + nums[curr]);
    if (farthestIndex >= nums.length - 1) {
      return true;
    }
    curr++;
  }
  return false;
}
