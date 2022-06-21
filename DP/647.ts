function countSubstrings(s: string): number {
  const dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0));
  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          dp[i][j] = 1;
          res++;
        } else {
          if (dp[i + 1][j - 1]) {
            dp[i][j] = 1;
            res++;
          }
        }
      }
    }
  }
  return res;
}
