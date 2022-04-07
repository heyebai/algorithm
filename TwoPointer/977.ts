function sortedSquares(nums: number[]): number[] {
  let l = 0,
    r = nums.length - 1;
  const res: number[] = [];
  while (l <= r) {
    Math.abs(nums[l]) > Math.abs(nums[r])
      ? res.unshift(Math.pow(nums[l++], 2))
      : res.unshift(Math.pow(nums[r--], 2));
  }
  return res;
}
