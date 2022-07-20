function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);
  let gi = 0,
    si = 0,
    res = 0;
  while (gi < g.length && si < s.length) {
    if (g[gi] <= s[si]) {
      res++;
      gi++;
      si++;
    } else {
      gi++;
    }
  }
  return res;
}
