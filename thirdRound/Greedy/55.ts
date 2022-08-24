function canJump(nums: number[]): boolean {
  let i = 0;
  while (i < nums.length - 1) {
    let scope = nums[i];
    if (scope === 0) return false;
    let max = 0;
    let tempIndex = 0;
    for (let j = i + 1; j <= i + scope; j++) {
      if (j + nums[j] > max) {
        max = j + nums[j];
        tempIndex = j;
      }
    }
    i = tempIndex;
  }
  return true;
}
