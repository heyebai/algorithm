function findJudge(n: number, trust: number[][]): number {
  const indegree: number[] = new Array(n + 1).fill(0);
  const outdegree: number[] = new Array(n + 1).fill(0);

  for (const [x, y] of trust) {
    outdegree[x]++;
    indegree[y]++;
  }
  for (let i = 1; i <= n; i++) {
    if (indegree[i] === n - 1 && outdegree[i] === 0) {
      return i;
    }
  }
  return -1;
}
