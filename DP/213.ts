function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  const res = [],
    robRange = [];
  robRange.push(nums.slice(0, nums.length - 1));
  robRange.push(nums.slice(1, nums.length));
  robRange.push(nums.slice(1, nums.length - 1));
  for (const n of robRange) {
    if (n.length === 0) {
      res.push(0);
      continue;
    }
    if (n.length === 1) {
      res.push(n[0]);
      continue;
    }

    const dp = new Array(n.length).fill(n[0]);
    dp[1] = Math.max(n[0], n[1]);
    for (let i = 2; i < n.length; i++) {
      dp[i] = Math.max(dp[i - 2] + n[i], dp[i - 1]);
    }
    res.push(dp[n.length - 1]);
  }
  return Math.max(...res);
}
