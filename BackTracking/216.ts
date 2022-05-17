function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  let sum: number = 0;
  const helper = (k: number, n: number, x: number) => {
    if (sum === n && path.length === k) {
      res.push(path.slice());
    }
    for (let i = x; i <= 9; i++) {
      path.push(i);
      sum += i;
      if (sum <= n) {
        helper(k, n, i + 1);
      }
      const a = path.pop();
      sum -= a;
    }
  };
  helper(k, n, 1);
  return res;
}
