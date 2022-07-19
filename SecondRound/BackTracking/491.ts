function findSubsequences(nums: number[]): number[][] {
  const res: number[][] = [];
  const backTracking = (path: number[], start: number) => {
    if (path.length >= 2) {
      res.push(path.slice());
    }
    const used: Set<number> = new Set();

    for (let i = start; i < nums.length; i++) {
      if (used.has(nums[i])) {
        continue;
      }

      if (nums[i] >= path[path.length - 1] || path.length === 0) {
        path.push(nums[i]);
        used.add(nums[i]);
        backTracking(path, i + 1);
        path.pop();
      }
    }
  };
  backTracking([], 0);
  return res;
}
