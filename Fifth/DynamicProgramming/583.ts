//     e a t
//   0 0 0 0
// s 0 0 0 0
// e 0 1
// a 0 0 2 0
function minDistance(word1: string, word2: string): number {
  const dp = new Array(word1.length + 1)
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
  return word1.length + word2.length - 2 * max;
}
