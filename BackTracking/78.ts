function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  const helper = (nums: number[], index: number) => {
    if (true) {
      res.push(path.slice());
    }
    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);
      helper(nums, i + 1);
      path.pop();
    }
  };
  helper(nums, 0);
  return res;
}
