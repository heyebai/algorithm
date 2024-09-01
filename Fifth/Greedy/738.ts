function monotoneIncreasingDigits(n: number): number {
  if (n < 10) return n;
  const nums = String(n)
    .split("")
    .map((s) => parseInt(s));
  let index = nums.length;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] < nums[i - 1]) {
      nums[i] = 9;
      nums[i - 1] = nums[i - 1] - 1;
      index = i;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 9;
  }
  return parseInt(nums.join(""));
}
