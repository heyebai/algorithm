function smallestTrimmedNumbers(nums: string[], queries: number[][]): number[] {
  const helper = (nums: string[], len: number): number[][] => {
    const temp = [];
    for (let i = 0; i < nums.length; i++) {
      temp.push([nums[i].substring(nums[i].length - len, nums[i].length), i]);
    }
    return temp.sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      return a[0] > b[0] ? 1 : -1;
    });
  };
  const res: number[] = [];
  for (const q of queries) {
    const temp = helper(nums, q[1]);
    res.push(temp[q[0] - 1][1]);
  }
  return res;
}
