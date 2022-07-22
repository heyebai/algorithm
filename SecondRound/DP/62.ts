function uniquePaths(m: number, n: number): number {
  const totalSteps = n - 1 + m - 1;
  let mul = 1;
  for (let i = 0; i < m - 1; i++) {
    mul *= totalSteps - i;
  }
  for (let i = m - 1; i >= 1; i--) {
    mul /= i;
  }
  return mul;
}
