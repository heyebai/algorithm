const sum = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

function largestSumAfterKNegations(nums: number[], k: number): number {
  let sortedNums = nums.sort((a, b) => a - b);
  let i = 0;
  while (i < k) {
    if (sortedNums[i] < 0) {
      sortedNums[i] = -sortedNums[i];
    } else if (sortedNums[i] === 0) {
      return sum(sortedNums);
    } else {
      break;
    }
    i++;
  }
  sortedNums = sortedNums.sort((a, b) => a - b);
  if ((k - i) % 2 === 1) {
    sortedNums[0] = -sortedNums[0];
  }
  return sum(sortedNums);
}
