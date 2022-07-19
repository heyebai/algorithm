function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  const used = new Array(nums.length).fill(0);
  const backTracking = (path: number[]) => {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === 0) {
        continue;
      }
      if (used[i] === 0) {
        path.push(nums[i]);
        used[i] = 1;
        backTracking(path);
        path.pop();
        used[i] = 0;
      }
    }
  };
  backTracking([]);
  return res;
}
