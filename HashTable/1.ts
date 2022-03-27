// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums: number[], target: number): number[] {
  const m: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (m.has(nums[i])) {
      return [m.get(nums[i]), i];
    }
    m.set(target - nums[i], i);
  }
}
