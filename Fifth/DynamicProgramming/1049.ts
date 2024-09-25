function lastStoneWeightII(stones: number[]): number {
  const sum = stones.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  const bagSize = ~~(sum / 2);
  const bag = new Array(bagSize + 1).fill(0);

  for (let i = 0; i < stones.length; i++) {
    for (let j = bagSize; j >= stones[i]; j--) {
      bag[j] = Math.max(bag[j - stones[i]] + stones[i], bag[j]);
    }
  }

  return Math.abs(sum - bag[bagSize] * 2);
}
