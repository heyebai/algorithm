function wordBreak(s: string, wordDict: string[]): boolean {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let j = 1; j <= s.length; j++) {
    for (let i = 0; i < j; i++) {
      const subString = s.substring(i, j);
      if (wordDict.includes(subString) && dp[i]) {
        dp[j] = true;
      }
    }
  }
  return dp[s.length];
}
