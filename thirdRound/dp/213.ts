function rob(nums: number[]): number {
  if (nums.length <= 2) return Math.max(...nums);

  // i: the most money I can rob until index i
  const dp1: number[] = new Array(nums.length - 1).fill(0);
  const dp2: number[] = new Array(nums.length - 1).fill(0);
  dp1[0] = nums[0];
  dp1[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length - 1; i++) {
    dp1[i] = Math.max(dp1[i - 2] + nums[i], dp1[i - 1]);
  }
  dp2[1] = nums[1];
  dp2[2] = Math.max(nums[2], nums[1]);
  for (let i = 3; i < nums.length; i++) {
    dp2[i] = Math.max(dp2[i - 2] + nums[i], dp2[i - 1]);
  }
  return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1]);
}
