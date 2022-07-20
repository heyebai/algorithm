function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalCost = 0;
  let currGas = 0;
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i];
    totalCost += diff;
    currGas += diff;
    if (currGas < 0) {
      start = i + 1;
      currGas = 0;
    }
  }
  if (totalCost < 0) return -1;
  return start;
}
