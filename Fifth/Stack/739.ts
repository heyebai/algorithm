function dailyTemperatures(temperatures: number[]): number[] {
  const stack = [];
  const result = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    if (stack.length === 0) {
      stack.push(i);
    } else {
      while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
        result[stack[stack.length - 1]] = i - stack[stack.length - 1];
        stack.pop();
      }
      stack.push(i);
    }
  }
  return result;
}
