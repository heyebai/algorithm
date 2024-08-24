function permute(nums: number[]): number[][] {
  const result = [];
  const temp = [];
  const backTracking = () => {
    if (temp.length === nums.length) {
      result.push(temp.slice());
      return;
    }
    const record = new Set();
    for (let i = 0; i < nums.length; i++) {
      if (temp.includes(nums[i])) {
        continue;
      }
      temp.push(nums[i]);
      backTracking();
      temp.pop();
    }
  };
  backTracking();
  return result;
}
