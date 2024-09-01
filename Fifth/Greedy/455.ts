function findContentChildren(g: number[], s: number[]): number {
  const sortedG = g.sort((a, b) => a - b);
  const sortedS = s.sort((a, b) => a - b);
  let result = 0;
  let gPointer = 0,
    sPointer = 0;
  while (gPointer < g.length && sPointer < s.length) {
    if (s[sPointer] < g[gPointer]) {
      sPointer++;
    } else {
      result++;
      sPointer++;
      gPointer++;
    }
  }
  return result;
}
