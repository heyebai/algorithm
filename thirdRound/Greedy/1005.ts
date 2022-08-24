function largestSumAfterKNegations(nums: number[], k: number): number {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));
  let times = k;
  for (let i = 0; i < nums.length; i++) {
    if (times === 0) break;
    if (nums[i] < 0) {
      times--;
      nums[i] = -nums[i];
    }
  }
  while (times > 0) {
    nums[nums.length - 1] = -nums[nums.length - 1];
    times--;
  }
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  return sum;
}
