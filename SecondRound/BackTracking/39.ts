function combinationSum(candidates: number[], target: number): number[][] {
  const res = [];
  let sum = 0;
  const backTracking = (path: number[], start: number) => {
    if (sum === target) {
      res.push(path.slice());
      return;
    }
    if (sum > target) {
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      sum += candidates[i];
      backTracking(path, i);
      path.pop();
      sum -= candidates[i];
    }
  };
  backTracking([], 0);
  return res;
}
