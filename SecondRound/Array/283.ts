/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let slow = 0,
    quick = 0;
  while (quick < nums.length) {
    if (nums[quick] !== 0) {
      nums[slow++] = nums[quick];
    }
    quick++;
  }
  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0;
  }
}
