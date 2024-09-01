function canCompleteCircuit(gas: number[], cost: number[]): number {
  let diff = 0;
  let gasSum = 0;
  let costSum = 0;
  let index = -1;
  for (let i = 0; i < gas.length; i++) {
    diff += gas[i] - cost[i];
    gasSum += gas[i];
    costSum += cost[i];
    if (diff >= 0 && index === -1) {
      index = i;
    } else if (diff < 0) {
      index = -1;
      diff = 0;
    }
  }
  if (costSum > gasSum) {
    return -1;
  }
  for (let i = 0; i < index; i++) {
    diff += gas[i] - cost[i];
    if (diff < 0) {
      index = -1;
      break;
    }
  }
  return index;
}
