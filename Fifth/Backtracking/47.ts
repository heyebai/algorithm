function permuteUnique(nums: number[]): number[][] {
  const sortedNums = nums.sort((a, b) => a - b);
  const result = [];
  const temp = [];
  const backTracking = (arr) => {
    if (temp.length === nums.length) {
      result.push(temp.slice());
      return;
    }
    const record = new Set();
    for (let i = 0; i < arr.length; i++) {
      if (record.has(arr[i])) {
        continue;
      }
      record.add(arr[i]);
      temp.push(arr[i]);
      backTracking([...arr.slice(0, i), ...arr.slice(i + 1)]);
      temp.pop();
    }
  };
  backTracking(sortedNums);
  return result;
}
