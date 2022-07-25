function minDistance(word1: string, word2: string): number {
  const dp: number[][] = new Array(word1.length + 1)
    .fill(0)
    .map((_) => new Array(word2.length + 1).fill(0));
  let max = 0;
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        max = Math.max(max, dp[i][j]);
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return word2.length + word1.length - max * 2;
}
