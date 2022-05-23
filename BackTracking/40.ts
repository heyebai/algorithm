function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  let sum: number = 0;
  const helper = (candidates: number[], target: number, index: number) => {
    if (sum === target) {
      res.push(path.slice());
      return;
    }
    for (let i = index; i < candidates.length && sum <= target; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) {
        continue;
      }
      path.push(candidates[i]);
      sum += candidates[i];
      helper(candidates, target, i + 1);
      const temp = path.pop();
      sum -= temp;
    }
  };
  candidates = candidates.sort((a, b) => a - b);
  helper(candidates, target, 0);
  return res;
}
