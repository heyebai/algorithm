function combinationSum(candidates: number[], target: number): number[][] {
  const result = [];
  const temp = [];
  let sum = 0;
  const backTracking = (index) => {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      result.push(temp.slice());
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      sum += candidates[i];
      temp.push(candidates[i]);
      backTracking(i);
      const num = temp.pop();
      sum -= num;
    }
  };
  backTracking(0);
  return result;
}

// 2,2,2,2
// 2,2,2,3
// 2,2,3
