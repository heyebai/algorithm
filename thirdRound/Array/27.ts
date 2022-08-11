function removeElement(nums: number[], val: number): number {
  let slow = 0,
    quick = 0;
  while (quick < nums.length) {
    if (nums[quick] === val) {
      quick++;
    } else {
      nums[slow++] = nums[quick++];
    }
  }
  return slow;
}
