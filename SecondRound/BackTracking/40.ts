function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const res = [];
  let sum = 0;
  const backTracking = (path: number[], start: number) => {
    if (sum > target) return;
    if (sum === target) {
      res.push(path.slice());
    }
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      path.push(candidates[i]);
      sum += candidates[i];
      backTracking(path, i + 1);
      path.pop();
      sum -= candidates[i];
    }
  };
  backTracking([], 0);
  return res;
}
