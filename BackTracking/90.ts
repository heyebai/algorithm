function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  const helper = (nums: number[], index: number) => {
    if (true) {
      res.push(path.slice());
    }
    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      helper(nums, i + 1);
      path.pop();
    }
  };
  nums = nums.sort((a, b) => a - b);
  helper(nums, 0);
  return res;
}
