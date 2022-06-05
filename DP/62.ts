function uniquePaths(m: number, n: number): number {
  const totalPath = m + n - 2;
  let mul = 1;
  for (let i = totalPath; i > totalPath - m + 1; i--) {
    mul *= i;
  }
  for (let i = 1; i < m; i++) {
    mul /= i;
  }
  return mul;
}
