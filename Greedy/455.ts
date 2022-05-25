function findContentChildren(g: number[], s: number[]): number {
  let res: number = 0;
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let j = 0;
  for (let i = 0; i < g.length; i++) {
    if (j >= s.length) {
      return res;
    }
    while (s[j] < g[i]) {
      j++;
      if (j >= s.length) {
        return res;
      }
    }
    res++;
    j++;
  }
  return res;
}
