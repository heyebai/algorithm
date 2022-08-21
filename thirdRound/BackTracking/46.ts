function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const backTracking = (path: number[], used: Set<number>) => {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used.has(nums[i])) continue;
      path.push(nums[i]);
      used.add(nums[i]);
      backTracking(path, used);
      const temp = path.pop();
      used.delete(temp);
    }
  };
  backTracking([], new Set());
  return res;
}
