function climbStairs(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;
  const steps = [1, 2];
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < steps.length; j++) {
      if (i >= steps[j]) {
        dp[i] += dp[i - steps[j]];
      }
    }
  }
  return dp[n];
}
