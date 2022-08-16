function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const backTracking = (path: number[], start: number) => {
    res.push(path.slice());
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backTracking(path, i + 1);
      path.pop();
    }
  };
  backTracking([], 0);
  return res;
}
