function nextGreaterElements(nums: number[]): number[] {
  const circularNums = [...nums, ...nums];
  const stack = [];
  const result = new Array(circularNums.length).fill(-1);
  for (let i = 0; i < circularNums.length; i++) {
    if (stack.length === 0) {
      stack.push(i);
    } else {
      while (circularNums[i] > circularNums[stack[stack.length - 1]]) {
        result[stack[stack.length - 1]] = circularNums[i];
        stack.pop();
      }
      stack.push(i);
    }
  }
  return result.slice(0, nums.length);
}
