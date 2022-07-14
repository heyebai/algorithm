function evalRPN(tokens: string[]): number {
  const nums = [];
  for (const t of tokens) {
    if (t === "+") {
      if (nums.length > 1) {
        nums.push(nums.pop() + nums.pop());
      }
    } else if (t === "-") {
      if (nums.length > 1) {
        const temp1 = nums.pop();
        const temp2 = nums.pop();
        nums.push(temp2 - temp1);
      }
    } else if (t === "*") {
      if (nums.length > 1) {
        nums.push(nums.pop() * nums.pop());
      }
    } else if (t === "/") {
      if (nums.length > 1) {
        const temp1 = nums.pop();
        const temp2 = nums.pop();
        nums.push(~~(temp2 / temp1));
      }
    } else {
      nums.push(parseInt(t));
    }
  }
  return nums[0];
}
