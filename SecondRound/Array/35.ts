function searchInsert(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const midIndex = ~~((left + right) / 2);
    if (nums[midIndex] === target) {
      return midIndex;
    } else {
      if (nums[midIndex] > target) {
        right = midIndex - 1;
      } else {
        left = midIndex + 1;
      }
    }
  }
  return left;
}
