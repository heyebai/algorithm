function dailyTemperatures(temperatures: number[]): number[] {
  const stack = [0];
  const res: number[] = new Array(temperatures.length).fill(0);
  for (let i = 1; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const t = stack.pop();
      res[t] = i - t;
    }
    stack.push(i);
  }
  return res;
}
