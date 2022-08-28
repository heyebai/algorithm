function monotoneIncreasingDigits(n: number): number {
  const nums = n
    .toString()
    .split("")
    .map((a) => parseInt(a));
  let index = nums.length;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > nums[i + 1]) {
      nums[i] = nums[i] - 1;
      index = i + 1;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 9;
  }
  return parseInt(nums.join(""));
}
