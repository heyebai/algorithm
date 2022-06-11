function findMaxForm(strs: string[], m: number, n: number): number {
  const goods = strs.reduce((acc, curr) => {
    let count0 = 0;
    for (const s of curr) {
      if (s === "0") {
        count0++;
      }
    }
    acc.push([count0, curr.length - count0]);
    return acc;
  }, []);
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (const g of goods) {
    for (let i = m; i >= g[0]; i--) {
      for (let j = n; j >= g[1]; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - g[0]][j - g[1]] + 1);
      }
    }
  }
  return dp[m][n];
}
