function sortedSquares(nums: number[]): number[] {
  let left = 0,
    right = nums.length - 1;
  const res: number[] = [];
  while (left <= right) {
    if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
      res.unshift(Math.pow(nums[left++], 2));
    } else {
      res.unshift(Math.pow(nums[right--], 2));
    }
  }
  return res;
}
