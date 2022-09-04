function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      const len = wordDict[j].length;
      if (i - len + 1 >= 0) {
        if (
          s.substring(i - len + 1, i + 1) === wordDict[j] &&
          dp[i - len + 1]
        ) {
          dp[i + 1] = true;
        }
      }
    }
  }
  console.log(dp);
  return dp[dp.length - 1];
}
