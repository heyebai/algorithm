function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = [];
  let sum = 0;
  const backTracking = (path: number[], start: number) => {
    if (sum === n && path.length === k) {
      res.push(path.slice());
      return;
    }
    for (let i = start; i <= 9; i++) {
      path.push(i);
      sum += i;
      backTracking(path, i + 1);
      const temp = path.pop();
      sum -= temp;
    }
  };
  backTracking([], 1);
  return res;
}
