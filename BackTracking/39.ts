function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  let sum: number = 0;
  const helper = (candidates: number[], target: number) => {
    if (sum === target) {
      res.push(path.slice());
    }
    for (let i = 0; i < candidates.length; i++) {
      if (path.length && candidates[i] < path[path.length - 1]) {
        continue;
      }
      path.push(candidates[i]);
      sum += candidates[i];
      if (sum <= target) {
        helper(candidates, target);
      }
      path.pop();
      sum -= candidates[i];
    }
  };
  helper(candidates, target);
  return res;
}
