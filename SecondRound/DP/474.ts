function findMaxForm(strs: string[], m: number, n: number): number {
  const counter = (s: string): number[] => {
    let count0 = 0,
      count1 = 0;
    for (const c of s) {
      if (c === "0") {
        count0++;
      } else {
        count1++;
      }
    }
    return [count0, count1];
  };
  const dp: number[][] = new Array(m + 1)
    .fill(0)
    .map(() => new Array(n + 1).fill(0));
  for (let i = 0; i < strs.length; i++) {
    const [count0, count1] = counter(strs[i]);
    for (let x = m; x >= count0; x--) {
      for (let y = n; y >= count1; y--) {
        dp[x][y] = Math.max(dp[x][y], dp[x - count0][y - count1] + 1);
      }
    }
  }
  return dp[m][n];
}
