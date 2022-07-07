function removeElement(nums: number[], val: number): number {
  let quick = 0,
    slow = 0;
  while (quick < nums.length) {
    if (nums[quick] !== val) {
      nums[slow++] = nums[quick];
    }
    quick++;
  }
  return slow;
}
