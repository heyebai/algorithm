function numberOfPairs(nums: number[]): number[] {
  const map: Map<number, number> = new Map();
  for (const n of nums) {
    if (map.has(n)) {
      const count = map.get(n);
      map.set(n, count + 1);
    } else {
      map.set(n, 1);
    }
  }
  let pairs = 0;
  let left = 0;
  for (const [k, v] of map) {
    pairs += ~~(v / 2);
    left += v % 2;
  }
  return [pairs, left];
}
