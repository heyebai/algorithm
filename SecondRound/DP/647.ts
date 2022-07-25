function countSubstrings(s: string): number {
  const dp: boolean[][] = new Array(s.length + 1)
    .fill(false)
    .map((_) => new Array(s.length + 1).fill(false));
  // dp[0][0]=true
  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 2) {
          dp[i][j] = true;
          res++;
        } else if (dp[i + 1][j - 1]) {
          dp[i][j] = true;
          res++;
        }
      }
    }
  }
  return res;
}
