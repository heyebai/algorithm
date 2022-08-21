function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let res = 0;
  let gp = 0,
    sp = 0;
  while (gp < g.length && sp < s.length) {
    if (s[sp] >= g[gp]) {
      sp++;
      gp++;
      res++;
    } else {
      sp++;
    }
  }
  return res;
}
