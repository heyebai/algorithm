//     r o s
//   0 1 2 3
// h 1 1 2 3
// o 2 2 1 2
// r 3 2 2 2
// s 4 3 3 2
// e 5 4 4 3

function minDistance(word1: string, word2: string): number {
  const dp = new Array(word1.length + 1)
    .fill(0)
    .map((_) => new Array(word2.length + 1).fill(0));
  for (let i = 1; i <= word2.length; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i;
  }
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[word1.length][word2.length];
}
