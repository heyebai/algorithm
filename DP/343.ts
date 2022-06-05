function integerBreak(n: number): number {
  if (n <= 3) return 1 * (n - 1);
  const res = new Array(n + 1).fill(0);
  res[1] = 1;
  res[2] = 2;
  res[3] = 3;
  for (let i = 4; i <= n; i++) {
    for (let j = 1; j < i - 1; j++) {
      res[i] = Math.max(res[i], res[i - j] * res[j]);
    }
  }
  return res[n];
}
