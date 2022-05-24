function findSubsequences(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  const helper = (nums: number[], index: number) => {
    if (path.length >= 2) {
      res.push(path.slice());
    }
    const usedSet: Set<number> = new Set();
    for (let i = index; i < nums.length; i++) {
      if (usedSet.has(nums[i])) {
        continue;
      }
      if (path.length === 0 || nums[i] >= path[path.length - 1]) {
        path.push(nums[i]);
        usedSet.add(nums[i]);
      } else {
        continue;
      }
      helper(nums, i + 1);
      path.pop();
    }
  };
  helper(nums, 0);
  return res;
}
