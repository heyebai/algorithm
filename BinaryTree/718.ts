function findLength(nums1: number[], nums2: number[]): number {
  const dp = new Array(nums1.length + 1)
    .fill(0)
    .map(() => new Array(nums2.length + 1).fill(0));
  let res = 0;
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > res) {
          res = dp[i][j];
        }
      }
    }
  }
  return res;
}
