function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  const helper = (nums: number[], exceptIndexes: number[]) => {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (exceptIndexes.indexOf(i) !== -1) {
        continue;
      }
      path.push(nums[i]);
      exceptIndexes.push(i);
      helper(nums, exceptIndexes);
      path.pop();
      exceptIndexes.pop();
    }
  };
  helper(nums, []);
  return res;
}
