function longestPalindromeSubseq(s: string): number {
  const dp = new Array(s.length)
    .fill(0)
    .map((_) => new Array(s.length).fill(0));
  let max = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[j] === s[i]) {
        if (j - i <= 1) {
          dp[i][j] = j - i + 1;
        } else {
          dp[i][j] = dp[i + 1][j - 1] + 2;
        }
        max = Math.max(max, dp[i][j]);
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
    // console.log(dp)
  }
  return max;
}
