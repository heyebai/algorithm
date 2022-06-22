function nextGreaterElements(nums: number[]): number[] {
  const doubleNums = nums.concat(nums);
  const stack = [],
    record = new Array(doubleNums.length).fill(-1);
  for (let i = 0; i < doubleNums.length; i++) {
    while (
      stack.length &&
      doubleNums[i] > doubleNums[stack[stack.length - 1]]
    ) {
      const index = stack.pop();
      record[index] = doubleNums[i];
    }
    stack.push(i);
  }
  return record.slice(0, nums.length);
}
