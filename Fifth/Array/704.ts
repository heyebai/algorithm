function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const index = Math.floor(left + right);
    if (nums[index] === target) {
      return index;
    } else if (nums[index] > target) {
      right = index - 1;
    } else {
      left = index + 1;
    }
  }
  return -1;
}
