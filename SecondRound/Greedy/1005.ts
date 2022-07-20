function largestSumAfterKNegations(nums: number[], k: number): number {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i];
      k--;
      if (k === 0) {
        break;
      }
    }
  }
  while (k > 0) {
    nums[nums.length - 1] = -nums[nums.length - 1];
    k--;
  }
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  return sum;
}
