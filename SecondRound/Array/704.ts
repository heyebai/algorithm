function search(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const midIndex = ~~((l + r) / 2);
    if (nums[midIndex] === target) {
      return midIndex;
    } else {
      if (nums[midIndex] > target) {
        r = midIndex - 1;
      } else {
        l = midIndex + 1;
      }
    }
  }
  return -1;
}
