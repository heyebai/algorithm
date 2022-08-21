function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  const used: boolean[] = new Array(nums.length).fill(false);
  const backTracking = (path: number[], start: number) => {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true;
        backTracking(path, i + 1);
        path.pop();
        used[i] = false;
      }
    }
  };
  backTracking([], 0);
  return res;
}
