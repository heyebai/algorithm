function canCompleteCircuit(gas: number[], cost: number[]): number {
  let res = 0;
  let sum = 0;
  let tempSum = 0;
  for (let i = 0; i < gas.length; i++) {
    const temp = gas[i] - cost[i];
    sum += temp;
    tempSum += temp;
    if (temp < 0 && tempSum < 0) {
      res = i + 1;
      tempSum = 0;
    }
  }
  return sum < 0 ? -1 : res;
}
