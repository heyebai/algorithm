function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const backTracking = (path: number[], used: Set<number>) => {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used.has(nums[i])) {
        path.push(nums[i]);
        used.add(nums[i]);
        backTracking(path, used);
        path.pop();
        used.delete(nums[i]);
      }
    }
  };
  const used: Set<number> = new Set();
  backTracking([], used);
  return res;
}
