function largestSumAfterKNegations(nums: number[], k: number): number {
  nums = nums.sort((a, b) => Math.abs(b) - Math.abs(a));
  let sum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (k > 0 && nums[i] < 0) {
      nums[i] = -nums[i];
      k--;
    }
  }
  while (k > 0) {
    nums[nums.length - 1] = -nums[nums.length - 1];
    k--;
  }
  for (let n of nums) {
    sum += n;
  }
  return sum;
}
