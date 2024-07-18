function removeElement(nums: number[], val: number): number {
  let slow = 0,
    fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      const temp = nums[slow];
      nums[slow++] = nums[fast];
      nums[fast] = temp;
    }
    fast++;
  }
  return slow;
}
