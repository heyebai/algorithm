function removeDuplicates(nums: number[]): number {
  let slow: number = 1,
    val: number = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (val !== nums[i]) {
      nums[slow++] = nums[i];
      val = nums[i];
    }
  }
  return slow;
}
