function isSubsequence(s: string, t: string): boolean {
  const dp = new Array(t.length + 1)
    .fill(0)
    .map(() => new Array(s.length + 1).fill(0));
  for (let i = 1; i <= t.length; i++) {
    for (let j = 1; j <= s.length; j++) {
      if (t[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[t.length][s.length] === s.length;
}
