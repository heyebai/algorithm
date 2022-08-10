function longestIdealString(s: string, k: number): number {
  const dp: number[] = new Array(s.length).fill(1);
  let max = 1;
  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] >= dp[i] && Math.abs(s.charCodeAt(i) - s.charCodeAt(j)) <= k) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        max = Math.max(max, dp[i]);
      }
    }
  }
  return max;
}
