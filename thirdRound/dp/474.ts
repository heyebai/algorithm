function findMaxForm(strs: string[], m: number, n: number): number {
  const dp: number[][] = new Array(m + 1)
    .fill(0)
    .map((_) => new Array(n + 1).fill(0));
  // dp[i][j] means i 0, j 1
  for (let i = 0; i < strs.length; i++) {
    let one = 0,
      zero = 0;
    for (let s of strs[i]) {
      if (s === "1") {
        one++;
      } else {
        zero++;
      }
    }
    for (let j = n; j >= one; j--) {
      for (let x = m; x >= zero; x--) {
        dp[x][j] = Math.max(dp[x][j], dp[x - zero][j - one] + 1);
      }
    }
  }
  return dp[m][n];
}
