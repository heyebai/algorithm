function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  const helper = (nums: number[], indexes: number[]) => {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && indexes.indexOf(i - 1) !== -1) {
        continue;
      }
      if (indexes.indexOf(i) === -1) {
        path.push(nums[i]);
        indexes.push(i);
      } else {
        continue;
      }
      helper(nums, indexes);
      path.pop();
      indexes.pop();
    }
  };
  nums = nums.sort((a, b) => a - b);
  helper(nums, []);
  return res;
}
