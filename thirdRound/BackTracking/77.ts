function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const backTracking = (path: number[], start: number) => {
    if (path.length === k) {
      res.push(path.slice());
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backTracking(path, i + 1);
      path.pop();
    }
  };
  backTracking([], 1);
  return res;
}
