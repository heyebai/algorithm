const twoSum = (nums: number[], target: number) => {
  const result = [];
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      const leftNum = nums[left],
        rightNum = nums[right];
      result.push([leftNum, rightNum]);
      while (leftNum === nums[++left]) {}
      while (rightNum === nums[--right]) {}
    }
  }
  return result;
};

function fourSum(nums: number[], target: number): number[][] {
  const result = [];
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i - 1]) continue;
    for (let j = i + 1; j < sortedNums.length; j++) {
      if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) continue;
      const twoSumArr = twoSum(
        sortedNums.slice(j + 1),
        target - sortedNums[i] - sortedNums[j]
      );
      while (twoSumArr.length) {
        result.push([sortedNums[i], sortedNums[j], ...twoSumArr.pop()]);
      }
    }
  }
  return result;
}
