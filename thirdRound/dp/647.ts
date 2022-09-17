function countSubstrings(s: string): number {
  const dp: boolean[][] = new Array(s.length)
    .fill(0)
    .map((_) => new Array(s.length).fill(false));
  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j] && (j - i <= 1 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        res++;
      }
    }
  }
  return res;
}
