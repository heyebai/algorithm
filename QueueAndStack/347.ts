function topKFrequent(nums: number[], k: number): number[] {
  const count: Map<number, number> = new Map();
  for (let i of nums) {
    if (count.has(i)) {
      count.set(i, count.get(i) + 1);
    } else {
      count.set(i, 1);
    }
  }
  const sorted: Map<number, number> = new Map(
    [...count.entries()].sort((a, b) => b[1] - a[1])
  );
  return Array.from(sorted.keys()).reduce((acc, curr, index) => {
    if (index < k) {
      acc.push(curr);
    }
    return acc;
  }, []);
}
