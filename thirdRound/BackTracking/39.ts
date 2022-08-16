function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  let sum = 0;
  const backTracking = (path: number[]) => {
    if (sum > target) return;
    if (sum === target) {
      res.push(path.slice());
      return;
    }
    let start = 0;
    if (path.length !== 0) {
      start = candidates.indexOf(path[path.length - 1]);
    }
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      sum += candidates[i];
      backTracking(path);
      const temp = path.pop();
      sum -= temp;
    }
  };
  backTracking([]);
  return res;
}
