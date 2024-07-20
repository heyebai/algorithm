function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();
  for (const n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }
  const arr = Array.from(map).sort(([x, y], [m, n]) => {
    return n - y;
  });

  return arr.reduce((acc, curr) => {
    if (acc.length < k) {
      acc.push(curr[0]);
    }
    return acc;
  }, []);
}
