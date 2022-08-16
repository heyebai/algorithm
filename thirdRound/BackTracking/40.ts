function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  let sum = 0;
  candidates.sort((a, b) => a - b);
  const backTracking = (path: number[], start: number) => {
    if (sum > target) return;
    if (sum === target) {
      res.push(path.slice());
      return;
    }
    const used: Set<number> = new Set();
    for (let i = start; i < candidates.length; i++) {
      if (used.has(candidates[i])) {
        continue;
      }
      path.push(candidates[i]);
      sum += candidates[i];
      used.add(candidates[i]);
      backTracking(path, i + 1);
      const temp = path.pop();
      sum -= temp;
    }
  };
  backTracking([], 0);
  return res;
}
