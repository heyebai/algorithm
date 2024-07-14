// num + y = target
// const twoSum = (nums: number[], target: number) => {
//   const result = [];
//   const map: Map<number, number> = new Map();
//   for (const num of nums) {
//     const count = map.get(num);
//     map.set(num, count ? count + 1 : 1);
//   }
//   for (const [num, v] of map) {
//     const y = target - num;
//     if (map.get(y)) {
//       if (y === num && map.get(y) < 2) continue;
//       result.push([num, y]);
//       map.set(num, 0);
//       map.set(y, 0);
//     }
//   }
//   return result;
// };

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

function threeSum(nums: number[]): number[][] {
  const sortedNums = nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < sortedNums.length; i++) {
    console.log(sortedNums[i], sortedNums[i - 1]);
    if (sortedNums[i] === sortedNums[i - 1]) continue;
    const twoSumArr = twoSum(sortedNums.slice(i + 1), 0 - sortedNums[i]);
    while (twoSumArr.length) {
      res.push([sortedNums[i], ...twoSumArr.pop()]);
    }
  }
  return res;
}
