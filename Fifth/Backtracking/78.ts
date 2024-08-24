function subsets(nums: number[]): number[][] {
  const result = [];
  const temp = [];
  const backTracking = (index) => {
    result.push(temp.slice());
    for (let i = index; i < nums.length; i++) {
      temp.push(nums[i]);
      backTracking(i + 1);
      temp.pop();
    }
  };
  backTracking(0);
  return result;
}
