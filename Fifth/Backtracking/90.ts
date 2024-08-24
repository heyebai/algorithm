function subsetsWithDup(nums: number[]): number[][] {
  const sortedNums = nums.sort((a, b) => a - b);
  const result = [];
  const temp = [];
  const backTracking = (index) => {
    result.push(temp.slice());
    for (let i = index; i < sortedNums.length; i++) {
      if (sortedNums[i] === sortedNums[i - 1] && i !== index) {
        continue;
      }
      temp.push(sortedNums[i]);
      backTracking(i + 1);
      temp.pop();
    }
  };
  backTracking(0);
  return result;
}
