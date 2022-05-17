// slice() to solve reference error
function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  const helper = (n: number, k: number, x: number) => {
    if (path.length === k) {
      res.push(path.slice());
      return;
    }
    for (let i = x; i <= n; i++) {
      path.push(i);
      helper(n, k, i + 1);
      path.pop();
    }
  };
  helper(n, k, 1);
  return res;
}
