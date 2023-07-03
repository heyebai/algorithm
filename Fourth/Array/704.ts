function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const index = ~~((left + right) / 2);
    if (nums[index] < target) {
      left = index + 1;
    } else if (nums[index] > target) {
      right = index - 1;
    } else if (nums[index] === target) {
      return index;
    }
  }
  return -1;
}
