function wordBreak(s: string, wordDict: string[]): boolean {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i <= s.length; i++) {
    for (const w of wordDict) {
      if (i >= w.length) {
        const word = s.substring(i - w.length, i);
        if (word === w && dp[i - w.length]) {
          dp[i] = true;
        }
      }
    }
  }
  return dp[s.length];
}
