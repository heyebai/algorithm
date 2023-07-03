function removeElement(nums: number[], val: number): number {
  let fast = 0,
    slow = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }
  return slow;
}
