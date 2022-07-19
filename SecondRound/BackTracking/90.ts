function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];
  const backTracking = (path: number[], start: number) => {
    res.push(path.slice());
    if (start === nums.length) return;
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      backTracking(path, i + 1);
      path.pop();
    }
  };
  backTracking([], 0);
  return res;
}
