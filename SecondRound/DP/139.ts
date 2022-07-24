function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      const subString = s.substring(j, i);
      if (wordDict.includes(subString) && dp[i - subString.length]) {
        dp[i] = true;
      }
    }
  }
  return dp[s.length];
}
