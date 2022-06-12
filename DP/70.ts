function climbStairs(n: number): number {
  if (n <= 1) {
    return n;
  }
  let curr = 2,
    last = 1,
    temp = 0;
  for (let i = 2; i < n; i++) {
    temp = curr;
    curr = curr + last;
    last = temp;
  }
  return curr;
}

function climbStairs1(n: number): number {
  const steps = [1, 2];
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < steps.length; j++) {
      if (i >= steps[j]) {
        dp[i] += dp[i - steps[j]];
      }
    }
  }
  return dp[n];
}
