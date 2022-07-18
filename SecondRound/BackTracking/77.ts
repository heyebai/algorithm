function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const backTracking = (k: number, startIndex: number, combo: number[]) => {
    if (combo.length === k) {
      res.push(combo.slice());
      return;
    }
    for (let i = startIndex; i <= n; i++) {
      combo.push(i);
      startIndex += 1;
      backTracking(k, startIndex, combo);
      combo.pop();
    }
  };
  backTracking(k, 1, []);
  return res;
}
