// x+y=target
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const y = target - nums[i];
    const index = map.get(y);
    if (index !== undefined) {
      return [index, i];
    }
    map.set(nums[i], i);
  }
}
