function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  const backTracking = (path: number[], start: number) => {
    res.push(path.slice());
    const used: Set<number> = new Set();
    for (let i = start; i < nums.length; i++) {
      if (used.has(nums[i])) {
        continue;
      }
      path.push(nums[i]);
      used.add(nums[i]);
      backTracking(path, i + 1);
      path.pop();
    }
  };
  backTracking([], 0);
  return res;
}
