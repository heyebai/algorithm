function removeElement(nums: number[], val: number): number {
  let slow: number = 0;
  nums.forEach((num, index) => {
    if (num !== val) {
      nums[slow++] = nums[index];
    }
  });
  return slow;
}
