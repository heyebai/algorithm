function findSubsequences(nums: number[]): number[][] {
  const result = [];
  const temp = [];
  const backTracking = (index) => {
    if (temp.length >= 2) {
      result.push(temp.slice());
    }
    const record = new Set();
    for (let i = index; i < nums.length; i++) {
      if (record.has(nums[i])) {
        continue;
      }
      record.add(nums[i]);
      if (temp.length === 0 || temp[temp.length - 1] <= nums[i]) {
        temp.push(nums[i]);
        backTracking(i + 1);
        temp.pop();
      }
    }
  };
  backTracking(0);
  return result;
}
