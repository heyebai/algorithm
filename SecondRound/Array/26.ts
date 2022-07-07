function removeDuplicates(nums: number[]): number {
  let slow = 1,
    quick = 1;
  while (quick < nums.length) {
    if (nums[quick] !== nums[quick - 1]) {
      nums[slow++] = nums[quick];
    }
    quick++;
  }
  return slow;
}
