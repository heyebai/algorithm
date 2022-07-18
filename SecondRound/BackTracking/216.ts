function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = [];
  let sum = 0;
  const backTracking = (path: number[], start: number) => {
    if (path.length === k) {
      if (sum === n) {
        res.push(path.slice());
      }
      return;
    }
    for (let i = start; i <= 9; i++) {
      path.push(i);
      sum += i;
      start += 1;
      backTracking(path, start);
      const t = path.pop();
      sum -= t;
    }
  };
  backTracking([], 1);
  return res;
}
